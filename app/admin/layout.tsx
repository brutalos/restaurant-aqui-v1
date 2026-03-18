import React from 'react'
import Link from 'next/link'
import { ShoppingCart, Calendar, LayoutDashboard, Home } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
        <div className="p-6">
          <Link href="/admin" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6 text-emerald-500" />
            Admin Aqui
          </Link>
        </div>

        <nav className="flex-1 px-4 py-2 space-y-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            Overview
          </Link>
          <Link
            href="/admin/orders"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Orders
          </Link>
          <Link
            href="/admin/reservations"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Reservations
          </Link>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-zinc-950">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
