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
      { name: "Capuccino (G)", price: "" },
      { name: "Caffé Latte (G)", price: "5,10" },
      { name: "Heiße Schokolade (G)", price: "4,50" },
    ]
  },
  {
    category: "Alkoholfreie Getränke",
    items: [
      { name: "Coca Cola, Coca Cola Zero 0,33 L", price: "3,90" },
      { name: "Kinley Tonic, Ginger Ale 0,25 L", price: "3,90" },
      { name: "Jarritos Mexican Cola 0,33 L", price: "4,90" },
      { name: "Soda Zitrone 0,5 L", price: "4,10" },
    ]
  },
  {
    category: "Hausgemachte Limonaden",
    items: [
      { name: "Mango-Maracuja Limonade 0,5 L", price: "6,90" },
      { name: "Kokos-Melone Limonade 0,5 L", price: "6,90" },
      { name: "Erdbeere-Zitrone Limonade 0,5 L", price: "6,90" },
    ]
  },
  {
    category: "Bier vom Fass",
    items: [
      { name: "Spaten München 0,5 L", price: "5,40" },
      { name: "Bio Zwickl 0,5 L", price: "5,80" },
    ]
  },
  {
    category: "Cocktails",
    items: [
      { name: "MOJITO", price: "12,20", desc: "Havana Club 3 Anos, Rohrzucker, Limetten, Limettensaft, Minze, Sodawasser" },
      { name: "STRAWBERRY MARGARITA", price: "12,20", desc: "Tequila, Triple Sec, Zitronensaft, Erdbeer-Creme" },
      { name: "PORNSTAR MARTINI", price: "13,90", desc: "Gin, Limettensaft, Passionsfrucht-Creme, Shot Prosecco" },
      { name: "PINA COLADA (G)", price: "12,50", desc: "Rum Weiß, Kokos-Creme, Ananassaft, Sahne" },
    ]
  }
]

export default function GetraenkekartePage() {
  return (
    <div className="bg-light min-h-screen pb-24">
      {/* Header */}
      <section className="relative py-32 bg-teal overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/images/aqui-blumen-e2c68ec9b0af.png" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter">Getränkekarte</h1>
          <div className="mt-6 flex justify-center items-center gap-4 text-accent">
            <span className="h-px w-12 bg-accent"></span>
            <span className="text-3xl">*</span>
            <span className="h-px w-12 bg-accent"></span>
          </div>
        </div>
      </section>

      {/* Drinks Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-4rem] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {drinksData.map((section, idx) => (
            <div key={idx} className="bg-teal text-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-teal-900 flex flex-col h-full">
              <h2 className="text-3xl font-black text-accent mb-10 border-b-4 border-white pb-2 inline-block self-start uppercase">
                {section.category}
              </h2>
              <div className="space-y-8 flex-grow">
                {section.items.map((item, iidx) => (
                  <div key={iidx} className="group">
                    <div className="flex justify-between items-baseline gap-4 mb-1">
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{item.name}</h3>
                      <span className="text-accent font-black text-lg whitespace-nowrap">
                        {item.price ? `€ ${item.price}` : ""}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-gray-400 text-xs leading-relaxed italic">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
