import React from 'react'

interface DrinkItem {
  name: string
  price: string
  desc?: string
}

interface DrinkSection {
  category: string
  items: DrinkItem[]
}

const drinksData: DrinkSection[] = [
  {
    category: "Hot Drinks",
    items: [
      { name: "Espresso", price: "2,90" },
      { name: "Double Espresso", price: "4,80" },
      { name: "Macchiato (G)", price: "3,00" },
      { name: "Cortado", price: "3,50" },
      { name: "Capuccino (G)", price: "4,80" },
      { name: "Melange (G)", price: "4,80" },
      { name: "Caffé Latte (G)", price: "5,10" },
      { name: "Verlängerter", price: "4,60" },
      { name: "Heiße Schokolade (G)", price: "4,50" },
    ]
  },
  {
    category: "Soft Drinks",
    items: [
      { name: "Coca Cola / Zero 0,33 L", price: "3,90" },
      { name: "Fanta / Sprite 0,33 L", price: "3,90" },
      { name: "Almdudler 0,33 L", price: "3,90" },
      { name: "Jarritos Mexican Cola 0,33 L", price: "4,90" },
      { name: "Römerquelle 0,33 L", price: "3,40" },
      { name: "Makava Iced Tea 0,33L", price: "3,80" },
      { name: "Red Bull 0,25 L", price: "4,80" },
    ]
  },
  {
    category: "Limonaden",
    items: [
      { name: "Mango-Maracuja 0,5 L", price: "6,90", desc: "Hausgemacht mit frischen Früchten" },
      { name: "Kokos-Melone 0,5 L", price: "6,90", desc: "Erfrischend & Exotisch" },
      { name: "Erdbeere-Zitrone 0,5 L", price: "6,90", desc: "Der Klassiker" },
    ]
  },
  {
    category: "Cocktails",
    items: [
      { name: "Mojito", price: "12,20", desc: "Havana Club 3 Anos, Rohrzucker, Limetten, Minze, Soda" },
      { name: "Strawberry Margarita", price: "12,20", desc: "Tequila, Triple Sec, Zitronensaft, Erdbeere" },
      { name: "Pornstar Martini", price: "13,90", desc: "Gin, Limettensaft, Passionsfrucht-Creme, Shot Prosecco" },
      { name: "Pina Colada (G)", price: "12,50", desc: "Rum Weiß, Kokos-Creme, Ananassaft, Sahne" },
    ]
  }
]

export default function GetraenkekartePage() {
  return (
    <div className="bg-dark text-white pt-40 pb-32 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-8 border-primary pb-10">
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
              TRANKLN<br /><span className="text-primary italic">DRINKS</span>
            </h1>
            <div className="text-right">
              <span className="block text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">Liquid Gold</span>
              <span className="block text-xl font-bold uppercase tracking-tight">Bar & Café</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {drinksData.map((section) => (
            <section key={section.category} className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white border-l-8 border-primary pl-6">
                {section.category}
              </h2>

              <div className="space-y-8">
                {section.items.map((item, idx) => (
                  <div key={idx} className="group transition-all duration-300">
                    <div className="flex justify-between items-baseline gap-6 mb-2">
                      <h3 className="text-lg font-black uppercase tracking-widest group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="h-[1px] flex-grow border-b border-white/10 mt-4"></div>
                      <span className="text-lg font-black text-primary italic">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-40 bg-primary/10 p-12 md:p-20 text-center space-y-8 border-2 border-primary/20">
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
            Happy Hour? <span className="text-primary italic">Every Hour.</span>
          </h3>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.4em] max-w-2xl mx-auto leading-relaxed">
            Genießen Sie unsere Auswahl an erstklassigen Getränken in entspannter Atmosphäre.
          </p>
        </div>
      </div>
    </div>
  )
}
