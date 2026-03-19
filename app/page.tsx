import Hero from "@/components/Hero"
import Shop from "@/components/Shop"

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      
      <Shop />
      
      {/* Tradition Section */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Wiener Tradition</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black tracking-tighter leading-[0.85]">
                Tradition <br /><span className="text-accent italic">Neu Erlebt</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-primary/80 leading-relaxed text-xl">
              <p className="font-playfair italic">
                "Wollzeile 5 – Ein Ort, an dem Geschichte auf modernen Genuss trifft."
              </p>
              <p>
                Inmitten des ersten Bezirks, direkt in der geschichtsträchtigen Wollzeile, laden wir Sie ein, die Wiener Gastlichkeit in einem völlig neuen Licht zu erleben. Wir verbinden klassische Eleganz mit zeitgemäßer Kulinarik.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8">
              {[
                { label: "Wiener Küche", icon: "🍽️" },
                { label: "Erlesene Weine", icon: "🍷" },
                { label: "Frühstück", icon: "☕" },
                { label: "Privat-Events", icon: "🥂" },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-5 group cursor-default">
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-3xl group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="uppercase tracking-[0.2em] font-bold text-xs text-primary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 group">
            <div className="aspect-[4/5] overflow-hidden bg-primary/5 border border-primary/10 shadow-2xl">
              <img 
                src="/images/tischansicht-13feb9344a24.jpg" 
                alt="Aqui Restaurant Tischansicht" 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-primary p-10 hidden md:flex flex-col justify-end text-accent shadow-2xl">
              <span className="text-5xl font-playfair font-black italic">1010</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold mt-2">Wien Wollzeile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div className="space-y-6">
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs">Saisonale Highlights</span>
              <h2 className="text-5xl md:text-8xl font-playfair font-black tracking-tighter leading-[0.85]">
                UNSERE <br /> <span className="text-accent italic">KARTE</span>
              </h2>
            </div>
            <a href="/menu" className="group text-xs font-bold uppercase tracking-[0.4em] border-b-2 border-accent pb-3 hover:text-accent transition-all">
              Ganze Karte ansehen <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "/images/mexican-food-featuring-tacos-b-ae773069e87b.jpg", title: "Klassiker" },
              { img: "/images/mexican-food-featuring-tacos-n-80e03838e806.jpg", title: "Modern" },
              { img: "/images/tacos-typical-mexican-food-see-646bb0ff12ad.jpg", title: "Saison" },
            ].map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden aspect-[3/4] bg-dark-green border border-accent/20">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                  <h3 className="text-4xl lg:text-6xl font-playfair font-black uppercase tracking-tighter opacity-100 transform group-hover:-translate-y-4 transition-all duration-500 text-white">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-500 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 bg-white px-4 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="inline-block text-accent">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor">
              <path d="M0 40h15l10-20V0H0v20h10L0 40zm35 0h15l10-20V0H35v20h10L35 40z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-playfair font-black tracking-tight leading-tight text-primary italic">
            Wiener Genuss in <span className="text-accent not-italic underline decoration-4 underline-offset-8">Goldener</span> Atmosphäre
          </h2>
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-primary/40">
            Tradition trifft Exzellenz im Herzen der Stadt
          </p>
        </div>
      </section>

      {/* Location / CTA Section */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs">Besuch Uns</span>
              <h2 className="text-5xl md:text-7xl font-playfair font-black tracking-tighter leading-[0.85]">
                INNERE <br /> <span className="text-accent italic">STADT</span>
              </h2>
            </div>
            <p className="text-white/70 text-xl font-medium leading-relaxed max-w-xl">
              Erleben Sie erstklassige Kulinarik direkt im Herzen Wiens. Ob zum eleganten Lunch oder exklusiven Dinner – wir freuen uns auf Ihren Besuch in der Wollzeile.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="/reservations" className="bg-accent text-primary px-10 py-5 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all text-center">
                Reservieren
              </a>
              <a href="/kontakt" className="border-2 border-accent text-accent px-10 py-5 font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-primary transition-all text-center">
                Anfahrt
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] lg:aspect-square overflow-hidden group border border-accent/20">
            <img 
              src="/images/restaurant-bowling.png" 
              alt="Wollzeile Location" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 border-2 border-accent/20 m-6 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
