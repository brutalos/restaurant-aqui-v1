'use client'

import React from 'react'
import Link from 'next/link'
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { items, addItem, removeItem, clearCart, totalAmount } = useCart()

  if (items.length === 0) {
    return (
      <div className="bg-white min-h-screen py-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="bg-gray-50 p-20 rounded-[4rem] shadow-sm space-y-8 flex flex-col items-center">
            <div className="bg-white p-8 rounded-full text-primary shadow-inner">
              <ShoppingBag size={80} strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-dark uppercase tracking-tighter">Dein Warenkorb ist leer</h1>
            <p className="text-gray-500 text-xl max-w-md mx-auto font-medium">
              Entdecke unsere köstlichen Cali-Mex Spezialitäten und fülle deinen Korb!
            </p>
            <div className="pt-8">
              <Link
                href="/shop"
                className="bg-primary hover:bg-dark text-white font-black py-5 px-12 rounded-full transition-all text-xl shadow-lg hover:scale-105 active:scale-95 inline-block uppercase tracking-widest"
              >
                JETZT BESTELLEN
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Shopping Cart</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
            Deine <span className="text-primary italic">Bestellung</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Items List */}
          <div className="lg:col-span-8 space-y-8">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-8 p-8 border-2 border-gray-100 group transition-all hover:border-primary">
                <div className="w-32 h-32 flex-shrink-0 bg-gray-50 overflow-hidden">
                  <img
                    src={item.imageUrl || '/images/placeholder.png'}
                    alt={item.name}
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="flex-grow space-y-2 text-center sm:text-left">
                  <h3 className="text-2xl font-black uppercase tracking-tight">{item.name}</h3>
                  <p className="text-primary font-bold text-lg">€ {item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-full">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-white hover:text-primary rounded-full transition-all"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-8 text-center font-black text-xl">{item.quantity}</span>
                  <button
                    onClick={() => addItem(item)}
                    className="p-2 hover:bg-white hover:text-primary rounded-full transition-all"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="text-right sm:w-32">
                  <p className="text-2xl font-black">€ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-8">
              <button
                onClick={clearCart}
                className="text-gray-400 hover:text-red-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-all"
              >
                <Trash2 size={16} /> Warenkorb leeren
              </button>
              <Link
                href="/shop"
                className="text-dark hover:text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 transition-all"
              >
                Weiter Einkaufen <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="bg-dark text-white p-10 space-y-8 sticky top-32">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Zusammenfassung</h2>
              
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center text-gray-400 font-bold uppercase tracking-widest text-xs">
                  <span>Zwischensumme</span>
                  <span className="text-white text-lg font-black">€ {totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 font-bold uppercase tracking-widest text-xs">
                  <span>Lieferkosten</span>
                  <span className="text-white">Wird berechnet</span>
                </div>
                <div className="h-px bg-white/10 my-8"></div>
                <div className="flex justify-between items-end">
                  <span className="text-primary font-black uppercase tracking-widest text-xs">Gesamtbetrag</span>
                  <span className="text-5xl font-black">€ {totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-primary hover:bg-white hover:text-dark text-white font-black py-6 rounded-none transition-all text-xl shadow-lg flex items-center justify-center gap-4 uppercase tracking-widest"
              >
                ZUR KASSE <ArrowRight size={24} />
              </Link>

              <p className="text-white/40 text-[10px] text-center uppercase tracking-[0.2em] font-bold">
                Inkl. MwSt. & zzgl. Lieferkosten
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
