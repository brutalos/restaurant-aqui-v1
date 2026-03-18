import React from 'react'

const menuData = [
  {
    category: "Entradas",
    items: [
      { name: "Patatas Bravas (G, C)", price: "7,90", desc: "Frittierte Kartoffeln mit hausgemachter Salsa Bravo und Aioli-Mayonnaise" },
      { name: "Totopos (G)", price: "5,90", desc: "Knusprige Tortilla-Chips mit hausgemachter Guacamole, Salsa Roja und Sour Cream" },
      { name: "Nachos con Queso (G)", price: "7,90", desc: "Knusprige Tortilla-Chips mit Kidneybohnenmus, überbacken mit Käse-Mix. Serviert mit Pico de Gallo und Käse Sauce" },
      { name: "Frites Carnitas Pikant (A, F, G)", price: "12,90", desc: "SureCrisp Pommes Frites mit Slow-Cooked Pulled Pork, Jalapenos, Salsa Roja, Pico de Gallo und Sour Cream, überbacken mit Käse-Mix" },
      { name: "Elote (C, G)", price: "5,90", desc: "Gegrillte Maiskolben mit Sour Cream, Feta und Smokey Rub" },
      { name: "Chili Poppers (G)", price: "7,90", desc: "Chilischoten gefüllt mit Käse dazu Knoblauch Sauce" },
      { name: "Mix Plate (A, G, C)", price: "16,90", desc: "Gebackene Zwiebelringe, Maiskolben und Tortilla-Chips, serviert mit Sour Cream, Salsa Roja und hausgemachter Guacamole" },
    ]
  },
  {
    category: "Streetfood",
    items: [
      { name: "Carnitas Tacos (2/3 Stk)", price: "6,90 / 9,90", desc: "Zart gegrillt-geschmortes Schweinefleisch, Frische rote Zwiebeln, Jalapenos, Limette, Koriander" },
      { name: "Birria Tacos (2/3 Stk)", price: "7,30 / 10,50", desc: "Saftig geschmortes Rindfleisch mit geschmolzenem Käse-Mix dazu Saft von Rindfleisch" },
      { name: "Californian Baja Fish (2/3 Stk)", price: "7,90 / 11,90", desc: "Knusprig gebackener Kabeljau, mit Coleslaw Salat, hausgemachter Guacamole, Chipotle-Mayonaise und Limette" },
    ]
  },
  {
    category: "Classics",
    items: [
      { name: "Sweet Potato Enchiladas (G)", price: "13,90", desc: "Drei Stück Maistortilla gefüllt mit Süßkartoffeln, Feta Käse, überbacken mit Cheddar Käse Sauce und Käse-Mix dazu karamellisierte Zwiebel, Salsa Verde" },
      { name: "Tostadas da Camarón (B, G)", price: "14,50", desc: "Zwei Frittierte Weizentortilla, belegt mit gegrillten Rotgarnelen, Bohnenmus, Romana Salat, Avocado Sauce, Chipotle Sauce" },
      { name: "Enchiladas de Pollo (G)", price: "14,90", desc: "Drei Stück Maistortilla gefüllt mit Hühnerbrust und Maiskörnern in Sahne Sauce, überbacken mit Cheddar Käse Sauce und Käse-Mix, dazu Roter Reis" },
      { name: "Burrito Con Pollo (A, G)", price: "15,50", desc: "Gegrillte Hühnerbrust, schwarze Bohnen, Mais, Käse-Mix, Weißkraut, Pico De Gallo, Avocado Sauce, Salsa Verde, serviert mit grünem mexikanischen Reis" },
    ]
  },
  {
    category: "Main Events",
    items: [
      { name: "Baked Potato with Chicken (F)", price: "13,50", desc: "Ofenkartoffel mit gegart-gegrillter Hühnerbrust in einer Mais-Sahne Sauce und Karamellisierten Zwiebel" },
      { name: "Pechuga de Pollo (F)", price: "16,50", desc: "Saftig gegrillte Hühnerbrust mit Sweet Chili-Ananas-Honig Sauce, dazu Reis und Salat" },
      { name: "Rump Steak (G)", price: "26,90", desc: "200g Rump Steak serviert mit einer Ofenkartoffel mit Kräuterbutter, dazu Knoblauch Sauce und Salsa Roja" },
    ]
  }
]

export const metadata = {
  title: "Speisekarte - Restaurant Aqui",
  description: "Entdecken Sie unsere köstlichen Cali-Mex Gerichte, von Tacos und Burritos bis hin zu Rump Steak.",
}

export default function MenuPage() {
  return (
    <div className="bg-white pt-40 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-8 border-dark pb-10">
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
              SPEISN<br /><span className="text-primary italic">MENU</span>
            </h1>
            <div className="text-right">
              <span className="block text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">Since 2023</span>
              <span className="block text-xl font-bold uppercase tracking-tight">Cali-Mex Kitchen</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {menuData.map((section) => (
            <section key={section.category} className="space-y-12">
              <div className="relative">
                <h2 className="text-5xl font-black uppercase tracking-tighter text-dark relative z-10">
                  {section.category}
                </h2>
                <div className="absolute -top-6 -left-6 text-8xl font-black text-gray-50 -z-0 select-none">
                  {section.category.substring(0, 3)}
                </div>
              </div>

              <div className="space-y-10">
                {section.items.map((item, idx) => (
                  <div key={idx} className="group transition-all duration-300">
                    <div className="flex justify-between items-start gap-6 mb-3">
                      <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="h-[2px] flex-grow bg-gray-100 mt-4 hidden sm:block"></div>
                      <span className="text-xl font-black text-primary italic whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm uppercase tracking-widest leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-40 pt-20 border-t-2 border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Allergene & Info</h4>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-loose">
              A: Gluten, B: Krebstiere, C: Ei, D: Fisch, F: Soja, G: Milch, H: Nüsse, L: Sellerie, M: Senf. <br />
              Alle Preise in Euro inkl. gesetzlicher Steuern.
            </p>
          </div>
          <div className="md:text-right flex flex-col justify-end">
            <p className="text-3xl font-black uppercase tracking-tighter text-dark">
              Guten <span className="text-primary italic">Appetit!</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
