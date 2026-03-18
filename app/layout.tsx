import type { Metadata } from "next"
import "./globals.css"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export const metadata: Metadata = {
  title: "Restaurant Aqui - Cali-Mex Food & Bar",
  description: "Californian Vibes, Mexican Bites in Vienna. Visit us for an unforgetable culinary experience.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
