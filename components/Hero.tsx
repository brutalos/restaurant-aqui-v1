import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/titelscreen-70c8e837417a.jpg"
          alt="Restaurant Aqui Atmosphere"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-block bg-accent px-6 py-2 mb-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-primary">
              Willkommen bei Aqui
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-playfair font-black uppercase tracking-tighter leading-[0.9] text-white">
            ELEGANT <br /><span className="text-accent italic">GENIESSEN</span>
          </h1>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="h-[1px] w-20 bg-accent hidden md:block"></div>
            <p className="text-lg md:text-2xl font-playfair italic tracking-[0.2em] max-w-xl text-accent">
              Wollzeile 5, 1010 Wien
            </p>
            <div className="h-[1px] w-20 bg-accent hidden md:block"></div>
          </div>

          <p className="pt-8 text-sm md:text-base font-medium text-white/80 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            Wiener Tradition trifft auf zeitlose Eleganz. Erleben Sie kulinarische Exzellenz im Herzen der Inneren Stadt.
          </p>

          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/menu"
              className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-primary bg-accent transition duration-300 ease-out hover:scale-105 shadow-2xl w-full sm:w-auto"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease uppercase tracking-[0.2em]">Speisekarte</span>
              <span className="relative invisible uppercase tracking-[0.2em]">Speisekarte</span>
            </a>
            <a
              href="/reservations"
              className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-white border-2 border-accent transition duration-300 ease-out hover:scale-105 hover:bg-accent hover:text-primary shadow-2xl w-full sm:w-auto"
            >
              <span className="uppercase tracking-[0.2em]">Reservierung</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  )
}

export default Hero
