import React from 'react'

interface SubPageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  highlight?: string
}

const SubPageHero = ({ title, subtitle, backgroundImage = "/images/titelscreen-70c8e837417a.jpg", highlight }: SubPageHeroProps) => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">
            {subtitle || "Restaurant Aqui"}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            {title} {highlight && <span className="text-primary italic">{highlight}</span>}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default SubPageHero
