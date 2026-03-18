import React from 'react'
import SubPageHero from "@/components/SubPageHero"
import ReservationTabs from "@/components/ReservationTabs"

export const metadata = {
  title: "Reservierung - Restaurant Aqui & Bowling",
  description: "Reservieren Sie Ihren Tisch oder Ihre Bowlingbahn im Restaurant Aqui.",
}

export default function ReservationsPage() {
  return (
    <div className="bg-white">
      <SubPageHero 
        title="Ihre" 
        highlight="Reservierung" 
        subtitle="Restaurant & Bowling"
        backgroundImage="/images/mexican-food-featuring-tacos-b-ae773069e87b.jpg"
      />
      
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2">
            <div className="space-y-12 mb-20">
              <div className="space-y-4">
                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Buchung</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                  Jetzt Platz <span className="text-primary italic">Sichern</span>
                </h2>
              </div>
              <p className="text-gray-500 text-xl font-medium leading-relaxed max-w-2xl">
                Ob für ein entspanntes Mittagessen, ein romantisches Dinner oder eine spannende Runde Bowling mit Freunden – wir reservieren Ihnen gerne den passenden Platz.
              </p>
            </div>
            <ReservationTabs />
          </div>

          <div className="space-y-20">
            {/* Info Cards */}
            <div className="bg-dark p-12 text-white shadow-2xl space-y-10">
              <h3 className="text-xs uppercase tracking-[0.3em] font-black text-primary">Wichtige Info</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">Große Gruppen</span>
                  <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">
                    Für Gruppen ab 10 Personen bitten wir um telefonische Reservierung oder per E-Mail.
                  </p>
                </div>
                <div className="space-y-2 border-t border-white/10 pt-6">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">Bowling</span>
                  <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">
                    Reservierungen für Bowlingbahnen sind verbindlich. Bitte erscheinen Sie 10 Minuten vor Spielbeginn.
                  </p>
                </div>
                <div className="space-y-2 border-t border-white/10 pt-6">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">Stornierung</span>
                  <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">
                    Sollten Sie verhindert sein, bitten wir um eine rechtzeitige Absage Ihrer Reservierung.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs uppercase tracking-[0.3em] font-black text-primary">Direktkontakt</h3>
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">Telefon</span>
                  <a href="tel:+436769479912" className="text-2xl font-black hover:text-primary transition-all tracking-tighter">(+43) 676 9479912</a>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">E-Mail</span>
                  <a href="mailto:office@aqui-restaurant.at" className="text-2xl font-black hover:text-primary transition-all tracking-tighter uppercase break-all">OFFICE@AQUI-RESTAURANT.AT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
