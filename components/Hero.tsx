import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/titelscreen-70c8e837417a.jpg"
          alt="Restaurant Aqui Atmosphere"
          className="w-full h-full object-cover"
        />
        {/* Overlay to improve text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 space-y-8 animate-fadeIn">
        <div className="bg-accent/90 inline-block px-8 py-4 transform -skew-x-12 mb-4">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest skew-x-12">
            Wir ziehen um! Ab 1.5.26 sind wir auf der
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold skew-x-12 mt-2">
            Summer Stage
          </h1>
        </div>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
          Wir freuen uns, Sie in unserem Mexikanisch-Kalifornischen Restaurant/Bar begrüßen zu können.
        </p>

        <div className="pt-8">
          <a
            href="#Karten"
            className="bg-accent hover:bg-gold-600 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 inline-block shadow-lg"
          >
            MEHR LESEN
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
