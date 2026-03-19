import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <span className="font-playfair text-3xl font-bold text-accent tracking-widest italic uppercase">AQUI</span>
            </Link>
            <p className="text-white/70 leading-relaxed text-sm font-medium">
              Wiener Tradition trifft auf Moderne. Erstklassige Kulinarik im Herzen Wiens – Wollzeile 5, 1010 Wien.
            </p>
            <div className="flex items-center space-x-5 pt-2">
              <a href="https://www.facebook.com/share/HQpPRHoyCLHhEAe7/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/aqui_calimex" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div id="Kontakt" className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-accent">Kontakt</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-4 text-white/80">
                <MapPin className="text-accent shrink-0" size={18} />
                <span className="uppercase tracking-widest">Restaurant Aqui<br />Wollzeile 5, 1010 Wien</span>
              </div>
              <div className="flex items-center space-x-4 text-white/80">
                <Phone className="text-accent shrink-0" size={18} />
                <a href="tel:+436648105757" className="hover:text-accent transition-colors tracking-widest">+43 664 810 57 57</a>
              </div>
              <div className="flex items-center space-x-4 text-white/80">
                <Mail className="text-accent shrink-0" size={18} />
                <a href="mailto:reservierung@aqui-vienna.at" className="hover:text-accent transition-colors tracking-widest">reservierung@aqui-vienna.at</a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-accent">Öffnungszeiten</h3>
            <div className="flex items-start space-x-4 text-white/80 text-sm">
              <Clock className="text-accent shrink-0" size={18} />
              <div className="uppercase tracking-widest leading-loose font-medium">
                <p>Mo - Fr 11:30 - 23:00</p>
                <p>Sa & So 11:30 - 00:00</p>
              </div>
            </div>
          </div>

          {/* Information Links */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-black text-accent">Information</h3>
            <ul className="space-y-3 text-sm uppercase tracking-widest font-medium">
              <li>
                <Link href="/reservations" className="text-white/80 hover:text-accent transition-colors">Reservierung</Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-white/80 hover:text-accent transition-colors">Kontakt</Link>
              </li>
              <li>
                <Link href="/impressum" className="text-white/80 hover:text-accent transition-colors">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutzerklaerung" className="text-white/80 hover:text-accent transition-colors">Datenschutz</Link>
              </li>
              <li>
                <Link href="/admin" className="text-white/40 hover:text-accent transition-colors">Admin Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
          <p>© {new Date().getFullYear()} RESTAURANT AQUI. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 md:mt-0 font-playfair italic normal-case text-sm">Design by Opencade</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
