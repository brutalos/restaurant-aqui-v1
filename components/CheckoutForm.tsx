'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { useCart } from '@/context/CartContext'
import AddressAutocomplete, { AddressResult } from './AddressAutocomplete'
import { ShoppingBag, ArrowRight, Loader2 } from 'lucide-react'

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const { items, totalAmount, clearCart } = useCart()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  
  const [addressData, setAddressData] = useState<AddressResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)
  
  // Wolt delivery state
  const [promiseId, setPromiseId] = useState<string | null>(null)
  const [deliveryFee, setDeliveryFee] = useState<number | null>(null)
  const [deliveryEta, setDeliveryEta] = useState<number | null>(null)
  const [deliveryError, setDeliveryError] = useState<string | null>(null)
  
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (addressData) {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      
      setDeliveryFee(null)
      setPromiseId(null)
      setDeliveryError(null)
      
      debounceRef.current = setTimeout(async () => {
        try {
          const res = await fetch('/api/wolt/promise', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              street: addressData.street,
              city: addressData.city,
              post_code: addressData.postCode
            }),
          })
          const data = await res.json()
          
          if (!res.ok || data.error) {
            setDeliveryError(data.error || 'Lieferung an diese Adresse zur Zeit nicht möglich')
            return
          }
          
          if (!data.is_binding) {
            setDeliveryError('Adresse zu ungenau für die Lieferung')
            return
          }
          
          setPromiseId(data.id)
          setDeliveryFee(data.price.amount / 100)
          setDeliveryEta(data.dropoff_eta_minutes || data.time_estimate_minutes)
        } catch (err) {
          console.error('Wolt check error:', err)
          setDeliveryError('Fehler bei der Lieferprüfung')
        }
      }, 500)
    }
  }, [addressData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) return
    if (!addressData) {
      setErrorMessage('Bitte wähle eine Lieferadresse aus')
      return
    }
    if (!promiseId) {
      setErrorMessage('Lieferung muss erst bestätigt werden')
      return
    }

    setLoading(true)
    setErrorMessage(null)

    const { error: submitError } = await elements.submit()
    if (submitError) {
      setErrorMessage(submitError.message || 'Ein Fehler ist aufgetreten')
      setLoading(false)
      return
    }

    try {
      // 1. Create Payment Intent
      const total = totalAmount + (deliveryFee || 0)
      const res = await fetch('/api/checkout/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          metadata: {
            customerName: formData.name,
            customerEmail: formData.email,
            deliveryAddress: addressData.formatted
          }
        }),
      })
      
      const { clientSecret, error: intentError } = await res.json()
      if (intentError) throw new Error(intentError)

      // 2. Confirm Payment
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
          payment_method_data: {
            billing_details: {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
            }
          }
        },
        redirect: 'if_required'
      })

      if (error) {
        setErrorMessage(error.message || 'Zahlung fehlgeschlagen')
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // 3. Confirm Order in DB
        const confirmRes = await fetch('/api/checkout/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items,
            total,
            customerName: formData.name,
            customerEmail: formData.email,
            customerPhone: formData.phone,
            deliveryAddress: addressData.formatted,
            deliveryStreet: addressData.street,
            deliveryCity: addressData.city,
            deliveryPostCode: addressData.postCode,
            deliveryLat: addressData.lat,
            deliveryLng: addressData.lon,
            woltDeliveryFee: deliveryFee,
            stripeIntentId: paymentIntent.id
          }),
        })
        
        const { orderId, error: confirmError } = await confirmRes.json()
        if (confirmError) throw new Error(confirmError)
        
        setOrderId(orderId)
        setOrderComplete(true)
        clearCart()
      }
    } catch (err: any) {
      console.error('Checkout Error:', err)
      setErrorMessage(err.message || 'Ein unerwarteter Fehler ist aufgetreten')
    } finally {
      setLoading(false)
    }
  }

  if (orderComplete) {
    return (
      <div className="text-center space-y-8 py-20 bg-white p-12 shadow-2xl">
        <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-primary">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-4xl font-black uppercase tracking-tighter">Vielen Dank für deine Bestellung!</h2>
        <p className="text-gray-500 text-lg">Deine Bestellung <span className="text-primary font-bold">#{orderId?.slice(-6)}</span> wird nun bearbeitet.</p>
        <div className="pt-8">
          <a href="/" className="bg-dark text-white font-black py-4 px-10 uppercase tracking-widest text-sm hover:bg-primary transition-all">
            Zurück zur Startseite
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Name</label>
          <input
            required
            type="text"
            placeholder="Dein voller Name"
            className="w-full bg-gray-50 border-2 border-gray-100 p-4 focus:border-primary outline-none transition-all font-bold"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">E-Mail</label>
          <input
            required
            type="email"
            placeholder="deine@email.at"
            className="w-full bg-gray-50 border-2 border-gray-100 p-4 focus:border-primary outline-none transition-all font-bold"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Telefon</label>
          <input
            required
            type="tel"
            placeholder="+43 660 1234567"
            className="w-full bg-gray-50 border-2 border-gray-100 p-4 focus:border-primary outline-none transition-all font-bold"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Lieferadresse (Google Maps)</label>
          <AddressAutocomplete
            onSelect={setAddressData}
            placeholder="Schimmelgasse 11, 1030 Wien..."
            className="w-full"
            locationBias={{ radius: 10000, center: { lat: 48.1925, lng: 16.3980 } }}
          />
        </div>
      </div>

      {addressData && (
        <div className="p-6 border-2 border-primary bg-primary/5 space-y-2">
          <p className="font-bold text-dark uppercase tracking-tight">Gewählte Adresse:</p>
          <p className="text-gray-600">{addressData.formatted}</p>
          {deliveryFee !== null ? (
            <div className="flex items-center gap-2 text-primary font-black uppercase text-sm tracking-widest pt-2">
              <span className="bg-primary text-white px-2 py-1">Wolt Drive</span>
              <span>€ {deliveryFee.toFixed(2)} Liefergebühr • ca. {deliveryEta} Min.</span>
            </div>
          ) : deliveryError ? (
            <p className="text-red-500 font-bold text-sm uppercase tracking-widest">{deliveryError}</p>
          ) : (
            <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-xs tracking-widest animate-pulse">
              <Loader2 className="animate-spin" size={14} /> Berechne Lieferkosten...
            </div>
          )}
        </div>
      )}

      <div className="space-y-6">
        <h3 className="text-2xl font-black uppercase tracking-tighter border-b-4 border-primary inline-block">Bezahlung</h3>
        <div className="p-6 bg-gray-50 border-2 border-gray-100">
          <PaymentElement />
        </div>
      </div>

      {errorMessage && (
        <div className="bg-red-50 text-red-500 p-4 font-bold text-sm uppercase tracking-widest border-l-4 border-red-500">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || !stripe || !elements || !promiseId}
        className="w-full bg-dark hover:bg-primary text-white font-black py-6 transition-all text-xl flex items-center justify-center gap-4 uppercase tracking-[0.2em] disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {loading ? (
          <Loader2 className="animate-spin" size={24} />
        ) : (
          <>
            JETZT BEZAHLEN (€ {(totalAmount + (deliveryFee || 0)).toFixed(2)}) <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </>
        )}
      </button>
      
      <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
        Sichere Bezahlung via Stripe Elements • Lieferung durch Wolt Drive
      </p>
    </form>
  )
}
