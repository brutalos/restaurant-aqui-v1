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
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status}`)
        }
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    )
  }

  const activeCategoryData = categories.find(cat => cat.id === activeCategory)

  return (
    <section id="categories" className="py-32 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">AQUI ONLINE</span>
          <h2 className="text-5xl md:text-7xl font-playfair font-black uppercase tracking-tighter leading-[0.85]">
            Bestellen & <span className="text-accent italic font-medium">Genießen</span>
          </h2>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all border-2 ${
                activeCategory === cat.id
                  ? 'bg-primary text-accent border-primary'
                  : 'bg-white text-primary border-gray-100 hover:border-accent'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activeCategoryData?.products?.map((product: any) => (
            <div key={product.id} className="group space-y-6">
              <div className="aspect-[4/5] overflow-hidden bg-primary/5 relative border border-primary/10">
                <img
                  src={product.imageUrl || '/images/placeholder.png'}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <button
                  onClick={() => addItem(product)}
                  className="absolute bottom-6 right-6 bg-accent text-primary p-5 shadow-2xl hover:bg-primary hover:text-accent transition-all transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Plus size={24} />
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-playfair font-black uppercase tracking-tight">{product.name}</h3>
                  <span className="text-primary font-bold font-inter">€ {product.price.toFixed(2)}</span>
                </div>
                <p className="text-primary/60 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop
