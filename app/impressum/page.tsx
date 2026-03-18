import React from 'react'

export default function ImpressumPage() {
  return (
    <div className="bg-light min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 bg-white p-12 md:p-20 rounded-[4rem] shadow-xl">
        <h1 className="text-5xl font-bold text-teal mb-12 border-b-4 border-accent pb-4 inline-block">Impressum</h1>
        <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">Anbieter dieser Internetseite ist:</h2>
            <p className="font-bold text-dark">Aquí Cali Mex GmbH</p>
            <p>Wagramer Straße 94/Top 602</p>
            <p>1220 Wien</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">Telefon:</h2>
              <p className="hover:text-accent transition-colors">
                <a href="tel:+436769479912">(+43) 676 9479912</a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">E-Mail:</h2>
              <p className="hover:text-accent transition-colors">
                <a href="mailto:office@aqui-restaurant.at">office@aqui-restaurant.at</a>
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">Firmenbuchnummer:</h2>
              <p>604436b</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">Behörde gem. ECG:</h2>
              <p>Magistratisches Bezirksamt des XXII. Bezirkes</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">Gestaltung:</h2>
            <p>nu:media, 1010 Wien,</p>
            <p className="text-accent hover:underline">
              <a href="https://nu-media.at" target="_blank" rel="noopener noreferrer">nu-media.at</a>
            </p>
          </section>

          <section className="text-sm text-gray-400 bg-gray-50 p-8 rounded-2xl italic">
            Gemäß § 2 Abs. 1 des Gaststättengesetzes (GastG) ist der Betrieb von Gaststätten in der Regel erlaubnispflichtig. Demzufolge sind gemäß § 5 Abs. 1 Nr. 3 des Telemediengesetzes (TMG) Angaben zur zuständigen Aufsichtsbehörde zu machen.
          </section>
        </div>
      </div>
    </div>
  )
}
