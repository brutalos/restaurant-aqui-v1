import React from 'react'
import Shop from '@/components/Shop'
import SubPageHero from '@/components/SubPageHero'

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubPageHero 
        title="Online Shop" 
        subtitle="Bestelle deine Lieblingsgerichte bequem nach Hause"
        backgroundImage="/images/hero-bg.jpg"
      />
      <Shop />
    </main>
  )
}
