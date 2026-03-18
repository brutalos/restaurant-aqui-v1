'use client'

import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useCart } from '@/context/CartContext'
import CheckoutForm from '@/components/CheckoutForm'
import SubPageHero from '@/components/SubPageHero'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

export default function CheckoutPage() {
  const { items, totalAmount } = useCart()
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (totalAmount > 0) {
      fetch('/api/checkout/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: totalAmount,
          currency: 'eur'
        }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
    }
  }, [totalAmount])

  const appearance = {
    theme: 'flat' as const,
    variables: {
      colorPrimary: '#00BFA5',
      colorBackground: '#ffffff',
      colorText: '#000000',
      colorDanger: '#df1b41',
      fontFamily: 'Inter, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '0px',
    },
    rules: {
      '.Input': {
        border: '2px solid #F3F4F6',
        padding: '12px',
      },
      '.Input:focus': {
        border: '2px solid #00BFA5',
        boxShadow: 'none',
      },
      '.Label': {
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: '10px',
        color: '#9CA3AF',
        marginBottom: '8px',
      }
    }
  }

  const options = {
    clientSecret: clientSecret || '',
    appearance,
  }

  return (
    <main className="min-h-screen bg-white">
      <SubPageHero 
        title="Checkout" 
        subtitle="Sichere Bezahlung & Schnelle Lieferung"
        backgroundImage="/images/hero-bg.jpg"
      />
      
      <div className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            {clientSecret && clientSecret.includes('_secret_') ? (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Initialisiere Zahlung...</p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-dark text-white p-12 space-y-8 sticky top-32">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Bestellübersicht</h2>
              
              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center gap-4 group">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/10 overflow-hidden flex-shrink-0">
                        <img 
                          src={item.imageUrl || '/images/placeholder.png'} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-all grayscale group-hover:grayscale-0"
                        />
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-tight text-sm">{item.name}</h4>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.quantity}x € {item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <span className="font-black text-primary">€ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="h-px bg-white/10 my-8"></div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-gray-400 font-bold uppercase tracking-widest text-xs">
                  <span>Zwischensumme</span>
                  <span className="text-white">€ {totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 font-bold uppercase tracking-widest text-xs">
                  <span>Lieferkosten</span>
                  <span className="text-white">Wird im Formular berechnet</span>
                </div>
                <div className="h-px bg-white/10 my-8"></div>
                <div className="flex justify-between items-end">
                  <span className="text-primary font-black uppercase tracking-widest text-xs leading-none pb-1">Gesamtbetrag</span>
                  <span className="text-5xl font-black">€ {totalAmount.toFixed(2)}</span>
                </div>
              </div>
              
              <p className="text-white/40 text-[10px] text-center uppercase tracking-[0.2em] font-bold">
                Inkl. MwSt. • Bezahlung durch Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
