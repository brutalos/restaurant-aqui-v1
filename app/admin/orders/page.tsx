import React from 'react'
import { prisma } from '@/lib/prisma'
import OrdersList from '@/components/admin/OrdersList'

export const dynamic = 'force-dynamic'

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        include: {
          product: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Order Management</h1>
        <p className="text-zinc-400 mt-2">Manage customer orders and Wolt courier dispatch.</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        <OrdersList initialOrders={orders} />
      </div>
    </div>
  )
}
