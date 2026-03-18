import Hero from "@/components/Hero"
import Link from "next/link"
import { Check } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Quotation Section */}
      <section className="bg-teal py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2 rotate-12">
          <img src="/images/aqui-blumen-e2c68ec9b0af.png" alt="" />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="text-accent text-6xl font-serif leading-none block mb-4">"</span>
          <h2 className="text-2xl md:text-3xl italic text-primary font-light mb-4">
            Sippin Margaritas, eating tostadas, that's the way we like
          </h2>
          <p className="text-accent font-medium uppercase tracking-widest text-sm">
            BEBIENDO MARGARITAS, COMIENDO TOSTADAS, ASÍ ES COMO NOS GUSTA
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 text-accent">
            <span className="h-px w-8 bg-accent"></span>
            <span className="text-2xl">*</span>
            <span className="h-px w-8 bg-accent"></span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="/images/tischansicht-13feb9344a24.jpg"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="inline-block border-b-2 border-accent pb-2">
                <span className="text-accent uppercase tracking-widest font-bold text-sm">Unsere Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark">Aqui - Hier</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Mexikanische und kalifornische Küche vereinen frische Zutaten, traditionelle Kochmethoden, Nachhaltigkeit und Kreativität. Beide Küchen verwenden gerne Gemüse, Obst, Gewürze, Vollkornprodukte, Nüsse und Samen.
                </p>
                <p>
                  Genießen Sie außerdem aufregende raffinierte Cocktails und Getränke, die das Beste aus beiden Regionen vereinen.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Check className="text-accent" size={20} />
                  <span className="font-medium">Mittagsmenüs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent" size={20} />
                  <span className="font-medium">Zustellung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent" size={20} />
                  <span className="font-medium">Cocktails</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent" size={20} />
                  <span className="font-medium">Takeaway</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/speisekarte"
                  className="bg-accent hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-all inline-block shadow-lg"
                >
                  MEHR LESEN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Another Quote */}
      <section className="bg-teal py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="text-accent text-6xl font-serif leading-none block mb-4">"</span>
          <h2 className="text-2xl md:text-3xl italic text-primary font-light mb-4">
            Where Every Bite's a Sunshine Delight
          </h2>
          <p className="text-accent font-medium uppercase tracking-widest text-sm">
            DONDE CADA BOCADO ES UNA DELICIA DEL SOL
          </p>
        </div>
      </section>

      {/* Menu Cards Section */}
      <section id="Karten" className="py-24 relative">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <img src="/images/aqui-blumen-e2c68ec9b0af.png" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-accent uppercase tracking-widest font-bold text-sm">Angebot</span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark">Unsere Speisen Und Getränke</h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Unser Restaurant bietet eine einzigartige Fusion aus mexikanischer und kalifornischer Küche für ein unvergessliches kulinarisches Erlebnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Speisekarte Card */}
            <div className="group overflow-hidden rounded-3xl shadow-xl bg-white border border-gray-100 transition-all hover:scale-[1.02]">
              <div className="h-80 overflow-hidden">
                <img
                  src="/images/Speisekarte-ceb23eb828c2.jpg"
                  alt="Food offerings"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-10 text-center space-y-4">
                <h3 className="text-3xl font-bold uppercase tracking-wide">Speisekarte</h3>
                <p className="text-gray-500">Unser Speisenangebot</p>
                <Link
                  href="/speisekarte"
                  className="text-accent font-bold hover:underline inline-block pt-2"
                >
                  MENÜ ANSEHEN →
                </Link>
              </div>
            </div>

            {/* Getränkekarte Card */}
            <div className="group overflow-hidden rounded-3xl shadow-xl bg-white border border-gray-100 transition-all hover:scale-[1.02]">
              <div className="h-80 overflow-hidden">
                <img
                  src="/images/Getraenkekarte-8c31412cd769.jpg"
                  alt="Drink offerings"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-10 text-center space-y-4">
                <h3 className="text-3xl font-bold uppercase tracking-wide">Getränkekarte</h3>
                <p className="text-gray-500">Kaffee / Softdrinks / Cocktails</p>
                <Link
                  href="/getraenkekarte"
                  className="text-accent font-bold hover:underline inline-block pt-2"
                >
                  GETRÄNKE ANSEHEN →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Ingredients Section */}
      <section className="py-24 bg-teal text-white relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-96 opacity-20 pointer-events-none translate-x-[-20%] translate-y-[20%]">
          <img src="/images/chilies_frei_750-73c6e830ff58.png" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-block border-b-2 border-accent pb-2">
                <span className="text-accent uppercase tracking-widest font-bold text-sm">100% Qualität</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Frische Zutaten</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Wir bereiten kulinarische Meisterwerke aus lokalen und hochwertigen Zutaten zu und bieten dazu passende hausgemachte Cocktails. Unser Ziel ist, unseren Gästen ein sinnliches Geschmackserlebnis zu bieten.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <div className="text-accent text-4xl font-bold italic">22 +</div>
                  <p className="text-sm font-medium uppercase tracking-widest text-gray-400">versch. Speisen</p>
                </div>
                <div className="space-y-2">
                  <div className="text-accent text-4xl font-bold italic">31 +</div>
                  <p className="text-sm font-medium uppercase tracking-widest text-gray-400">Sitzplätze</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
              <img src="/images/mexican-food-featuring-tacos-n-80e03838e806.jpg" className="rounded-2xl shadow-xl aspect-square object-cover mt-8" alt="Tacos" />
              <img src="/images/mexican-food-featuring-tacos-b-ae773069e87b.jpg" className="rounded-2xl shadow-xl aspect-square object-cover" alt="Burritos" />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Menus Section */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block border-b-2 border-accent pb-2">
                <span className="text-accent uppercase tracking-widest font-bold text-sm">Jede Woche</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark">Mittagsmenüs</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Wir bieten wöchentlich frische Mittagsmenüs mit einer großen Auswahl an köstlichen Gerichten.
                </p>
                <p>
                  Melden Sie sich einfach für unsere Liste an, um jede Woche das aktuelle Menü per E-Mail zu erhalten.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <p className="text-dark font-bold mb-4">Bekommen Sie unser aktuelles Mittagsmenü immer per E-Mail</p>
                <form action="#" method="POST" className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="E-Mail-Adresse"
                    required
                    className="flex-grow bg-light border border-gray-200 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <button
                    type="submit"
                    className="bg-accent hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full transition-all whitespace-nowrap"
                  >
                    ANMELDEN
                  </button>
                </form>
                <p className="text-xs text-gray-400 mt-4 italic">
                  Wir senden keinen Spam! Erfahren Sie mehr in unserer <Link href="/datenschutzerklaerung" className="hover:underline">Datenschutzerklärung</Link>.
                </p>
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px]">
              <img
                src="/images/tacos-typical-mexican-food-see-646bb0ff12ad.jpg"
                alt="Weekly menu preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light p-12 md:p-20 rounded-[4rem] shadow-sm relative overflow-hidden">
             <div className="absolute right-0 bottom-0 w-80 pointer-events-none opacity-50">
               <img src="/images/aqui-blumen-e2c68ec9b0af.png" className="scale-x-[-1]" alt="" />
             </div>
             <div className="max-w-2xl relative z-10 space-y-8">
                <h2 className="text-4xl font-bold text-dark">Bewerben Sie sich bei uns!</h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Für unser Team suchen wir noch Verstärkung in einigen Bereichen wie Küche, Service und Büro.
                  </p>
                  <p>
                    Wenn Sie an einer Beschäftigung bei AQUI in einem aufgeweckten Team bei guter Bezahlung interessiert sind, bewerben Sie sich gerne unter <a href="mailto:office@aqui-restaurant.at" className="text-accent font-bold hover:underline">office@aqui-restaurant.at</a>.
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    href="mailto:office@aqui-restaurant.at"
                    className="bg-teal hover:bg-dark text-white font-bold py-4 px-10 rounded-full transition-all inline-block shadow-lg"
                  >
                    JETZT BEWERBEN
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
