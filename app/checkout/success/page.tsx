import React from 'react'
import Link from 'next/link'
import { CheckCircle, ShoppingBag } from 'lucide-react'
import SubPageHero from '@/components/SubPageHero'

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubPageHero 
        title="Bestellung erfolgreich" 
        subtitle="Vielen Dank für deine Bestellung"
        backgroundImage="/images/hero-bg.jpg"
      />
      
      <div className="py-32 px-4 max-w-4xl mx-auto text-center space-y-12">
        <div className="bg-gray-50 p-20 rounded-[4rem] shadow-sm space-y-8 flex flex-col items-center">
          <div className="bg-white p-8 rounded-full text-primary shadow-inner">
            <CheckCircle size={80} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-dark uppercase tracking-tighter">Zahlung erfolgreich</h1>
          <p className="text-gray-500 text-xl max-w-md mx-auto font-medium leading-relaxed">
            Deine Bestellung wurde erfolgreich aufgegeben und wird nun für dich vorbereitet. Du erhältst in Kürze eine Bestätigung per E-Mail.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="bg-primary hover:bg-dark text-white font-black py-5 px-12 rounded-full transition-all text-xl shadow-lg hover:scale-105 active:scale-95 flex items-center gap-4 uppercase tracking-widest"
            >
              WEITER SHOPPEN <ShoppingBag size={24} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
