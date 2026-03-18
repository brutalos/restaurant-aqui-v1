import React from 'react'
import SubPageHero from "@/components/SubPageHero"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import GoogleMap from "@/components/GoogleMap"

export const metadata = {
  title: "Kontakt - Restaurant Aqui",
  description: "Besuchen Sie das Restaurant Aqui in Wien Landstraße. Kontaktieren Sie uns für Fragen oder Reservierungen.",
}

export default function KontaktPage() {
  return (
    <div className="bg-white">
      <SubPageHero 
        title="Land" 
        highlight="Strasse" 
        subtitle="Besuchen Sie uns in Wien"
        backgroundImage="/images/restaurant-bowling.png"
      />
      
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-20">
            <div className="space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Kontaktinformationen</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                Hier <br /> <span className="text-primary italic">Sind Wir</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-black text-dark">Adresse</h3>
                </div>
                <p className="text-lg font-bold uppercase tracking-widest leading-relaxed text-gray-500">
                  RESTAURANT AQUI<br />
                  SCHIMMELGASSE 11<br />
                  1030 WIEN
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-black text-dark">Öffnungszeiten</h3>
                </div>
                <div className="text-lg font-bold uppercase tracking-widest leading-relaxed text-gray-500">
                  <p>SO - DO: 11:00 - 23:00</p>
                  <p>FR & SA: 11:00 - 01:00</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-black text-dark">Telefon</h3>
                </div>
                <a href="tel:+436648105757" className="text-lg font-bold uppercase tracking-widest leading-relaxed text-gray-500 hover:text-primary transition-all">
                  (+43) 664 810 57 57
                </a>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-black text-dark">E-Mail</h3>
                </div>
                <a href="mailto:reservierung@575sagmeister.at" className="text-lg font-bold uppercase tracking-widest leading-relaxed text-gray-500 hover:text-primary transition-all break-all uppercase">
                  reservierung@575sagmeister.at
                </a>
              </div>
            </div>

            <div className="pt-10">
              <a
                href="/reservations"
                className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-black text-white bg-dark transition duration-300 ease-out hover:scale-105 shadow-2xl"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease uppercase tracking-[0.2em]">Jetzt Reservieren</span>
                <span className="relative invisible uppercase tracking-[0.2em]">Jetzt Reservieren</span>
              </a>
            </div>
          </div>

          <div className="h-full min-h-[500px] bg-gray-100 shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 relative">
            <GoogleMap 
              address="Schimmelgasse 11, 1030 Wien"
              lat={48.194784}
              lng={16.398418}
              zoom={17}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
