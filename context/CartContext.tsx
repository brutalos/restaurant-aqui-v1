'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  imageUrl: string | null
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: any) => void
  removeItem: (productId: string) => void
  clearCart: () => void
  totalCount: number
  totalAmount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (product: any) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeItem = (productId: string) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId)
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
      }
      return prevItems.filter((item) => item.id !== productId)
    })
  }

  const clearCart = () => {
    setItems([])
  }

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalCount, totalAmount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
