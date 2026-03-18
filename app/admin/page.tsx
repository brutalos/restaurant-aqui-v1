import React from 'react'
import { prisma } from '@/lib/prisma'
import { ShoppingCart, Calendar, Clock, DollarSign, Package } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const [orderCount, reservationCount, totalRevenue, pendingOrders] = await Promise.all([
    prisma.order.count(),
    prisma.reservation.count(),
    prisma.order.aggregate({
      _sum: {
        total: true
      }
    }),
    prisma.order.count({
      where: { status: 'paid' }
    })
  ])

  const stats = [
    {
      label: 'Total Orders',
      value: orderCount,
      icon: ShoppingCart,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      label: 'Pending Orders',
      value: pendingOrders,
      icon: Clock,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      label: 'Reservations',
      value: reservationCount,
      icon: Calendar,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      label: 'Total Revenue',
      value: `€${(totalRevenue._sum.total || 0).toFixed(2)}`,
      icon: DollarSign,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h1>
        <p className="text-zinc-400 mt-2">Welcome back to the Admin Dashboard of Aqui.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center gap-6">
            <div className={`p-4 rounded-xl ${stat.bg}`}>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider">{stat.label}</p>
              <h2 className="text-2xl font-bold text-white mt-1">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders Preview */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">Recent Orders</h3>
            <a href="/admin/orders" className="text-sm text-emerald-500 hover:text-emerald-400 font-medium">View all</a>
          </div>
          <div className="divide-y divide-zinc-800">
            {/* Fetch and map recent orders here */}
            <div className="p-6 text-center text-zinc-500">
              Go to the Orders page to see all orders.
            </div>
          </div>
        </div>

        {/* Recent Reservations Preview */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">Recent Reservations</h3>
            <a href="/admin/reservations" className="text-sm text-emerald-500 hover:text-emerald-400 font-medium">View all</a>
          </div>
          <div className="divide-y divide-zinc-800">
            <div className="p-6 text-center text-zinc-500">
              Go to the Reservations page to see all reservations.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
