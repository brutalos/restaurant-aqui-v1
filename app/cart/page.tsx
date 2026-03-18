'use client'

import React from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export default function CartPage() {
  return (
    <div className="bg-light min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
        <div className="bg-white p-20 rounded-[4rem] shadow-xl space-y-8 flex flex-col items-center">
          <div className="bg-teal p-8 rounded-full text-accent shadow-inner">
            <ShoppingBag size={80} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-dark uppercase tracking-tighter">Dein Warenkorb ist leer</h1>
          <p className="text-gray-500 text-xl max-w-md mx-auto font-medium">
            Entdecke unsere köstlichen Cali-Mex Spezialitäten und fülle deinen Korb!
          </p>
          <div className="pt-8">
            <Link
              href="/speisekarte"
              className="bg-accent hover:bg-gold-600 text-white font-black py-5 px-12 rounded-full transition-all text-xl shadow-lg hover:scale-105 active:scale-95 inline-block"
            >
              JETZT BESTELLEN
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
