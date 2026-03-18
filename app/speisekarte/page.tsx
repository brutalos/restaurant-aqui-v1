import React from 'react'

interface MenuItem {
  name: string
  price: string
  desc?: string
}

interface MenuSection {
  category: string
  items: MenuItem[]
}

const menuData: MenuSection[] = [
  {
    category: "ENTRADAS",
    items: [
      { name: "PATATAS BRAVAS (G, C)", price: "7,90", desc: "Frittierte Kartoffeln mit hausgemachter Salsa Bravo und Aioli-Mayonnaise" },
      { name: "TOTOPOS (G)", price: "5,90", desc: "Knusprige Tortilla- Chips mit hausgemachter Guacamole, Salsa Roja und Sour Cream" },
      { name: "NACHOS CON QUESO (G)", price: "", desc: "Knusprige Tortilla-Chips mit Kidneybohnenmus, überbacken mit Käse-Mix. Serviert mit Pico de Gallo und Käse Sauce" },
      { name: "FRITES CARNITAS PIKANT (A, F, G)", price: "12,90", desc: "SureCrisp Pommes Frites mit Slow-Cooked Pulled Pork, Jalapenos, Salsa Roja, Pico de Gallo und Sour Cream, überbacken mit Käse-Mix" },
      { name: "ELOTE (C, G)", price: "", desc: "Gegrillte Maiskolben mit Sour Cream, Feta und Smokey Rub" },
      { name: "Chili Poppers (G)", price: "", desc: "Chilischoten gefüllt mit Käse dazu Knoblauch Sauce" },
      { name: "Mix Plate: Onion Rings, Corn, Nachos (A, G, C)", price: "16,90", desc: "Gebackene Zwiebelringe, Maiskolben und Tortilla-Chips, serviert mit Sour Cream, Salsa Roja und hausgemachter Guacamole" },
    ]
  },
  {
    category: "MEXICAN STREETFOOD",
    items: [
      { name: "Carnitas (A, F) - 2 Stk", price: "9,90", desc: "Zart gegrillt-geschmortes Schweinefleisch, Frische rote Zwiebeln, Jalapenos, Limette, Koriander" },
      { name: "Birria (f, G) - 2 Stk", price: "7,30", desc: "Saftig geschmortes Rindfleisch mit geschmolzenem Käse-Mix dazu Saft von Rindfleisch" },
      { name: "Californian Baja Fish (A, D, G)", price: "", desc: "Knusprig gebackener Kabeljau, mit Coleslaw Salat, hausgemachter Guacamole, Chipotle-Mayonaise und Limette" },
    ]
  },
  {
    category: "Mexican Classics",
    items: [
      { name: "Sweet potato Enchiladas (G)", price: "13,90", desc: "Drei Stück Maistortilla gefüllt mit Süßkartoffeln, Feta Käse, überbacken mit Cheddar Käse Sauce und Käse-Mix dazu karamellisierte Zwiebel, Salsa Verde" },
      { name: "Tostadas da Camarón (B, G)", price: "14,50", desc: "Zwei Frittierte Weizentortilla, belegt mit gegrillten Rotgarnelen, Bohnenmus, Romana Salat, Avocado Sauce, Chipotle Sauce" },
      { name: "Enchiladas de Pollo (G)", price: "14,90", desc: "Drei Stück Maistortilla gefüllt mit Hühnerbrust und Maiskörnern in Sahne Sauce, überbacken mit Cheddar Käse Sauce und Käse-Mix, dazu Roter Reis" },
    ]
  },
  {
    category: "Burritos",
    items: [
      { name: "Con Pollo (A,G)", price: "15,50", desc: "Gegrillte Hühnerbrust, schwarze Bohnen, Mais, Käse-Mix, Weißkraut, Pico De Gallo, Avocado Sauce, Salsa Verde, serviert mit grünem mexikanischen Reis" },
      { name: "Carnitas (A, F, L, G)", price: "", desc: "Zart gegrillt-geschmortes Schweinefleisch, schwarze Bohnen, Käse-Mix, karamellisierte Zwiebel, Salsa Roja, serviert mit mexikanischem roten Reis" },
      { name: "Black Pearl (A, F, G)", price: "24,90", desc: "Mit 4 Stück gerillten Rotgarnelen, 5 Stück Black Tiger Garnelen, Gegrilltem Kabeljau, Bummerlsalat, frischen Tomaten, Käse-Mix, Parmesan Käse, Tartar Sauce, serviert mit mexikanischem grünen Reis, Limette, Kaviar" },
    ]
  },
  {
    category: "Fajitas",
    items: [
      { name: "Con Pollo (A, G)", price: "21,50", desc: "Saftig gegrillte Hühnerbrust, aromatisch gegrillte Zwiebeln und Trikolor Paprika" },
      { name: "Con Carne (A, G)", price: "23,90", desc: "Gegrillte Steakstreifen, aromatisch gegrillte Zwiebeln und Trikolor Paprika" },
    ]
  },
  {
    category: "Quesadillas",
    items: [
      { name: "Chicken Avocado (A, F, G, L)", price: "", desc: "Gefüllt mit saftig gegrilltem Hühnerfleisch, Schwarze Bohnen dazu Guacamole" },
      { name: "Cheesy Beef (A, F, G)", price: "15,90", desc: "Gefüllt mit saftig geschmortem Rindfleisch dazu Guacamole" },
      { name: "XXL Quesadillas (A, F, G)", price: "19,90", desc: "Große Weizentortilla gefüllt mit gegrillte Hühnerbrust, Speck, Käse-Mix, Parmesan, Jalapenos, dazu Surcrisp Pommes Frites und Salat, hausgemachte Guacamole, Salsa Verde" },
    ]
  },
  {
    category: "Main",
    items: [
      { name: "Baked Potato with Chicken (F)", price: "13,50", desc: "Ofenkartoffel mit gegart-gegrillter Hühnerbrust in einer Mais-Sahne Sauce und Karamellisierten Zwiebel" },
      { name: "Pechuga de Pollo (F)", price: "16,50", desc: "Saftig gegrillte Hühnerbrust mit Sweet Chili-Ananas-Honig Sauce, dazu Reis und Salat" },
      { name: "Rump Steak (G)", price: "26,90", desc: "200g Rump Steak serviert mit einer Ofenkartoffel mit Kräuterbutter, dazu Knoblauch Sauce und Salsa Roja" },
    ]
  }
]

export default function SpeisekartePage() {
  return (
    <div className="bg-light min-h-screen pb-24">
      {/* Header */}
      <section className="relative py-32 bg-teal overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/images/aqui-blumen-e2c68ec9b0af.png" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter">Speisekarte</h1>
          <div className="mt-6 flex justify-center items-center gap-4 text-accent">
            <span className="h-px w-12 bg-accent"></span>
            <span className="text-3xl">*</span>
            <span className="h-px w-12 bg-accent"></span>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-4rem] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuData.map((section, idx) => (
            <div key={idx} className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 flex flex-col h-full">
              <h2 className="text-3xl font-black text-teal mb-10 border-b-4 border-accent pb-2 inline-block self-start uppercase">
                {section.category}
              </h2>
              <div className="space-y-10 flex-grow">
                {section.items.map((item, iidx) => (
                  <div key={iidx} className="group cursor-default">
                    <div className="flex justify-between items-baseline gap-4 mb-2">
                      <h3 className="text-xl font-bold text-dark group-hover:text-accent transition-colors">{item.name}</h3>
                      <span className="text-accent font-black text-xl whitespace-nowrap">
                        {item.price ? `€ ${item.price}` : ""}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-gray-500 text-sm leading-relaxed italic">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Allergen Info */}
      <div className="max-w-4xl mx-auto px-4 mt-20 text-center text-xs text-gray-400 leading-relaxed uppercase tracking-widest">
        ALLERGENLISTE: (A) Glutenhaltiges Getreide, (B) Krebstiere, (C) Eier, (D) Fische, (F) Soja, (G) Milch, (H) Schalenfrüchte, (L) Sellerie, (M) Senf
      </div>
    </div>
  )
}
