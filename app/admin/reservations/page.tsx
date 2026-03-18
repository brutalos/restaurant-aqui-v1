import React from 'react'
import { prisma } from '@/lib/prisma'
import ReservationsList from '@/components/admin/ReservationsList'

export const dynamic = 'force-dynamic'

export default async function AdminReservationsPage() {
  const reservations = await prisma.reservation.findMany({
    orderBy: {
      date: 'desc'
    }
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Reservation Management</h1>
        <p className="text-zinc-400 mt-2">Manage restaurant and bowling reservations.</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        <ReservationsList initialReservations={reservations} />
      </div>
    </div>
  )
}
