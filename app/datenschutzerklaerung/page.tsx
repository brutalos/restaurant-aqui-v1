import React from 'react'

export default function DatenschutzerklaerungPage() {
  return (
    <div className="bg-light min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 bg-white p-12 md:p-20 rounded-[4rem] shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-teal mb-12 border-b-4 border-accent pb-4">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-gray-600 leading-relaxed text-base md:text-lg">
          <p className="text-sm text-gray-400 uppercase tracking-widest">Zuletzt aktualisiert am 19. Oktober 2023 | Wirksam ab dem 19. Oktober 2023</p>
          
          <p>
            Diese Datenschutzerklärung beschreibt die Richtlinien von <strong>Aquí Cali Mex GmbH</strong>, Wagramer Straße 94/Top 602, Wien 1220, Österreich, E-Mail: <a href="mailto:office@aqui-restaurant.at" className="text-accent hover:underline">office@aqui-restaurant.at</a>, Telefon: +43 1 396 11 03, zur Erfassung, Nutzung und Offenlegung Ihrer Informationen, die wir sammeln, wenn Sie unsere Website (https://aqui-restaurant.at) nutzen.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark">Ihre Rechte</h2>
            <p>
              Je nach geltendem Recht haben Sie möglicherweise das Recht, auf Ihre persönlichen Daten zuzugreifen und diese zu berichtigen oder zu löschen, eine Kopie Ihrer persönlichen Daten zu erhalten, die aktive Verarbeitung Ihrer Daten einzuschränken oder dagegen zu widersprechen, uns aufzufordern, Ihre persönlichen Informationen an eine andere Stelle zu übertragen, die von Ihnen erteilte Einwilligung zur Verarbeitung Ihrer Daten zu widerrufen, das Recht, bei einer Aufsichtsbehörde eine Beschwerde einzureichen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark">Sicherheit</h2>
            <p>
              Die Sicherheit Ihrer Informationen ist uns wichtig, und wir werden angemessene Sicherheitsmaßnahmen ergreifen, um den Verlust, Missbrauch oder die unbefugte Änderung Ihrer Informationen unter unserer Kontrolle zu verhindern. Angesichts der inhärenten Risiken können wir jedoch keine absolute Sicherheit garantieren.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark">Cookies</h2>
            <p>
              Um mehr darüber zu erfahren, wie wir diese Technologien verwenden und Ihre Wahlmöglichkeiten in Bezug auf diese Tracking-Technologien, lesen Sie bitte unsere Cookie-Richtlinie.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark">Links zu Dritten</h2>
            <p>
              Unser Dienst kann Links zu anderen Websites enthalten, die nicht von uns betrieben werden. Diese Datenschutzerklärung bezieht sich nicht auf die Datenschutzrichtlinien und anderen Praktiken Dritter. Wir empfehlen dringend, die Datenschutzrichtlinie jeder Website zu überprüfen, die Sie besuchen.
            </p>
          </section>

          <div className="pt-12 border-t border-gray-100 text-sm text-gray-400">
            <p>© Aquí Cali Mex GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
