'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Facebook, Instagram } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Speisekarte', href: '/speisekarte' },
    { name: 'Getränkekarte', href: '/getraenkekarte' },
    { name: 'Kontakt', href: '/#Kontakt' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                className="h-10 md:h-12 w-auto"
                src="/images/aqui-logo-quer-dca6fcd780f6.png"
                alt="Restaurant Aqui Logo"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-sm uppercase tracking-widest font-semibold transition-colors ${isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://www.facebook.com/share/HQpPRHoyCLHhEAe7/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className={isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'}>
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/aqui_calimex" target="_blank" rel="noopener noreferrer" className={isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'}>
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-dark' : 'text-white'} hover:text-primary focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white absolute top-0 left-0 w-full h-screen transition-all duration-500 flex flex-col items-center justify-center space-y-8 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-dark hover:text-primary"
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl uppercase tracking-[0.2em] font-bold text-dark hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <div className="flex items-center space-x-8 pt-8">
          <a href="https://www.facebook.com/share/HQpPRHoyCLHhEAe7/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/aqui_calimex" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
