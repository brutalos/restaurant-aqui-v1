import Hero from "@/components/Hero"
import Shop from "@/components/Shop"

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      
      <Shop />
      
      {/* Story Section */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Unsere Story</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                Aqui - <span className="text-primary italic">Hier</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-gray-500 leading-relaxed text-xl font-medium">
              <p>
                Mexikanische und kalifornische Küche vereinen frische Zutaten, traditionelle Kochmethoden, Nachhaltigkeit und Kreativität. Beide Küchen verwenden gerne Gemüse, Obst, Gewürze, Vollkornprodukte, Nüsse und Samen.
              </p>
              <p>
                Genießen Sie außerdem aufregende raffinierte Cocktails und Getränke, die das Beste aus beiden Regionen vereinen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8">
              {[
                { label: "Mittagsmenüs", icon: "🌮" },
                { label: "Cocktails", icon: "🍹" },
                { label: "Zustellung", icon: "🚲" },
                { label: "Events", icon: "🎉" },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-5 group cursor-default">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-3xl group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="uppercase tracking-[0.2em] font-black text-xs text-dark">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 group">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
              <img 
                src="/images/tischansicht-13feb9344a24.jpg" 
                alt="Aqui Restaurant Tischansicht" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-primary p-10 hidden md:flex flex-col justify-end text-white shadow-2xl">
              <span className="text-5xl font-black italic">2026</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black mt-2">Est. Vienna</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-32 bg-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div className="space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Frisch & Köstlich</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                CALI-MEX <br /> <span className="text-primary italic">VIBES</span>
              </h2>
            </div>
            <a href="/menu" className="group text-xs font-black uppercase tracking-[0.4em] border-b-2 border-primary pb-3 hover:text-primary transition-all">
              Ganze Karte ansehen <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { img: "/images/mexican-food-featuring-tacos-b-ae773069e87b.jpg", title: "Tacos" },
              { img: "/images/mexican-food-featuring-tacos-n-80e03838e806.jpg", title: "Burritos" },
              { img: "/images/tacos-typical-mexican-food-see-646bb0ff12ad.jpg", title: "Nachos" },
            ].map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden aspect-[3/4] bg-black">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                  <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter opacity-100 transform group-hover:-translate-y-4 transition-all duration-500">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bowling Section */}
      <section className="py-32 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="aspect-[16/9] overflow-hidden bg-gray-100 shadow-2xl">
              <img 
                src="/images/bowling-interior.png" 
                alt="Aqui Bowling Alley" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary flex items-center justify-center text-white shadow-xl rotate-12">
              <span className="text-4xl font-black italic">STRIKE</span>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Viel Mehr Als Essen</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                MODERN <br /> <span className="text-primary italic">BOWLING</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-gray-500 leading-relaxed text-xl font-medium">
              <p>
                Kombiniere erstklassiges Essen mit sportlicher Action. Unsere hochmodernen Bowlingbahnen bieten das perfekte Ambiente für Firmenfeiern, Geburtstage oder einen unvergesslichen Abend mit Freunden.
              </p>
              <p>
                Genieße kühle Drinks direkt an der Bahn und erlebe Bowling in einem völlig neuen Licht – neonfarben, laut und voller Energie.
              </p>
            </div>

            <div className="pt-8">
              <a href="/reservations" className="inline-block bg-dark text-white px-12 py-6 font-black uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-xl">
                Bahn Reservieren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 bg-white px-4 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="inline-block text-primary">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor">
              <path d="M0 40h15l10-20V0H0v20h10L0 40zm35 0h15l10-20V0H35v20h10L35 40z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight text-dark italic">
            Where Every Bite's a <span className="text-primary not-italic underline decoration-4 underline-offset-8">Sunshine</span> Delight
          </h2>
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-gray-400">
            Donde cada bocado es una delicia del sol
          </p>
        </div>
      </section>

      {/* Weekly Menu Section */}
      <section className="py-32 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-12 md:p-24 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs text-center lg:text-left block">Aktuell</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-center lg:text-left">
                  Mittags <span className="text-primary italic">Menüs</span>
                </h2>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed text-center lg:text-left">
                Wir bieten wöchentlich frische Mittagsmenüs mit einer großen Auswahl an köstlichen Gerichten. 
                Melden Sie sich für unseren Newsletter an.
              </p>
              <form action="#" method="POST" className="flex flex-col sm:flex-row gap-0 border-2 border-dark focus-within:border-primary transition-colors">
                <input
                  type="email"
                  placeholder="DEINE E-MAIL"
                  required
                  className="flex-grow bg-transparent px-8 py-5 focus:outline-none font-bold uppercase tracking-widest text-sm"
                />
                <button
                  type="submit"
                  className="bg-dark text-white px-10 py-5 font-black uppercase tracking-[0.2em] hover:bg-primary transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
            <div className="aspect-square overflow-hidden bg-gray-200">
              <img src="/images/Speisekarte-ceb23eb828c2.jpg" alt="Menu Preview" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
            </div>
          </div>
        </div>
      </section>
      {/* Location / CTA Section */}
      <section className="py-32 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Besuch Uns</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                IN WIEN <br /> <span className="text-primary italic">LANDSTRASSE</span>
              </h2>
            </div>
            <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-xl">
              Erlebe erstklassige Cali-Mex Küche direkt im Herzen des 3. Bezirks. Ob zum Lunch oder After-Work Drinks – wir sind dein Hotspot in der Schimmelgasse.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="/reservations" className="bg-primary text-white px-10 py-5 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-dark transition-all text-center">
                Reservieren
              </a>
              <a href="/kontakt" className="border-2 border-white text-white px-10 py-5 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-dark transition-all text-center">
                Anfahrt
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] lg:aspect-square overflow-hidden group">
            <img 
              src="/images/restaurant-bowling.png" 
              alt="Landstraße Location" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 border-2 border-primary/20 m-6 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
