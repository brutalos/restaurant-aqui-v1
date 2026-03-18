import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand Info */}
          <div className="space-y-8">
            <img
              className="h-14 w-auto brightness-0 invert"
              src="/images/aqui-logo-quer-dca6fcd780f6.png"
              alt="Restaurant Aqui Logo"
            />
            <p className="text-gray-400 leading-relaxed text-sm uppercase tracking-wider">
              Kalifornisch-Mexikanische Küche, Restaurant, Bar, Café im Donauzentrum, 1220 Wien.
            </p>
            <div className="flex items-center space-x-5 pt-2">
              <a href="https://www.facebook.com/share/HQpPRHoyCLHhEAe7/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/aqui_calimex" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div id="Kontakt" className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-primary">Kontakt</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-4 text-gray-300">
                <MapPin className="text-primary shrink-0" size={18} />
                <span className="uppercase tracking-widest">Restaurant Aqui<br />Donauzentrum Wien</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:+436769479912" className="hover:text-primary transition-colors tracking-widest">(+43) 676 9479912</a>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:office@aqui-restaurant.at" className="hover:text-primary transition-colors tracking-widest">OFFICE@AQUI-RESTAURANT.AT</a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-primary">Öffnungszeiten</h3>
            <div className="flex items-start space-x-4 text-gray-300 text-sm">
              <Clock className="text-primary shrink-0" size={18} />
              <div className="uppercase tracking-widest leading-loose">
                <p>So - Do 11:00 - 23:00</p>
                <p>Fr & Sa 11:00 - 01:00</p>
              </div>
            </div>
          </div>

          {/* Information Links */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-primary">Information</h3>
            <ul className="space-y-3 text-sm uppercase tracking-widest">
              <li>
                <Link href="/impressum" className="text-gray-300 hover:text-primary transition-colors">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutzerklaerung" className="text-gray-300 hover:text-primary transition-colors">Datenschutz</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500">
          <p>© {new Date().getFullYear()} RESTAURANT AQUI. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 md:mt-0">DESIGN BY OPENCADE</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
