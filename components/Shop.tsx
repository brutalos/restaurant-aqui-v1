'use client'

import React, { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import { Plus, ShoppingCart } from 'lucide-react'

const Shop = () => {
  const [categories, setCategories] = useState<any[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const { addItem } = useCart()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        setCategories(data)
        if (data.length > 0) {
          setActiveCategory(data[0].id)
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  const activeCategoryData = categories.find(cat => cat.id === activeCategory)

  return (
    <section id="categories" className="py-32 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Online Shop</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
            Bestellen & <span className="text-primary italic">Genießen</span>
          </h2>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all border-2 ${
                activeCategory === cat.id
                  ? 'bg-dark text-white border-dark'
                  : 'bg-white text-dark border-gray-100 hover:border-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activeCategoryData?.items.map((product: any) => (
            <div key={product.id} className="group space-y-6">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                <img
                  src={product.imageUrl || '/images/placeholder.png'}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <button
                  onClick={() => addItem(product)}
                  className="absolute bottom-6 right-6 bg-primary text-white p-5 shadow-2xl hover:bg-dark transition-all transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Plus size={24} />
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-black uppercase tracking-tight">{product.name}</h3>
                  <span className="text-primary font-bold">€ {product.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop
