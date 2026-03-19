'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Facebook, Instagram, ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { totalCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Speisekarte', href: '/menu' },
    { name: 'Getränkekarte', href: '/getraenkekarte' },
    { name: 'Shop', href: '/shop' },
    { name: 'Reservierung', href: '/reservations' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <span className="font-playfair text-2xl md:text-3xl font-bold text-accent tracking-widest italic">AQUI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-sm uppercase tracking-widest font-semibold transition-colors text-white hover:text-accent`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <Link href="/cart" className="relative p-2 transition-colors text-white hover:text-accent">
                <ShoppingCart size={22} strokeWidth={2.5} />
                <span className={`absolute -top-1 -right-1 bg-accent text-primary text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-primary ${totalCount > 0 ? 'block' : 'hidden'}`}>
                  {totalCount}
                </span>
              </Link>
              <a href="https://www.facebook.com/share/HQpPRHoyCLHhEAe7/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/aqui_calimex" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 transition-colors text-white hover:text-accent">
              <ShoppingCart size={22} strokeWidth={2.5} />
              <span className={`absolute -top-1 -right-1 bg-accent text-primary text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-primary ${totalCount > 0 ? 'block' : 'hidden'}`}>
                {totalCount}
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-primary absolute top-0 left-0 w-full h-screen transition-all duration-500 flex flex-col items-center justify-center space-y-8 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-accent"
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl uppercase tracking-[0.2em] font-bold text-white hover:text-accent font-playfair"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <div className="flex items-center space-x-8 pt-8">
          <a href="https://www.facebook.com/share/HQpPRHoyCLHhEAe7/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/aqui_calimex" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
