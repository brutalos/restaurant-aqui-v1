'use client'

import React, { useState } from 'react'
import { 
  Calendar, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  XCircle, 
  Clock,
  Phone,
  Mail,
  User,
  MessageSquare,
  Trophy
} from 'lucide-react'

type Reservation = {
  id: string
  name: string
  email: string
  phone: string
  type: string
  date: Date
  time: string
  guests: number
  lanes: number | null
  message: string | null
  status: string
  createdAt: Date
}

interface ReservationsListProps {
  initialReservations: any[]
}

export default function ReservationsList({ initialReservations }: ReservationsListProps) {
  const [reservations, setReservations] = useState<Reservation[]>(initialReservations)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [loading, setLoading] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const updateStatus = async (id: string, newStatus: string) => {
    setLoading(id)
    try {
      const res = await fetch(`/api/admin/reservations/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) {
        setReservations(reservations.map(r => r.id === id ? { ...r, status: newStatus } : r))
      }
    } catch (error) {
      console.error('Failed to update status:', error)
    } finally {
      setLoading(null)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'text-emerald-500 bg-emerald-500/10'
      case 'pending': return 'text-amber-500 bg-amber-500/10'
      case 'cancelled': return 'text-red-500 bg-red-500/10'
      default: return 'text-zinc-400 bg-zinc-800'
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date(date))
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-zinc-800/50 text-zinc-400 text-xs uppercase tracking-wider">
            <th className="px-6 py-4 font-semibold">Type</th>
            <th className="px-6 py-4 font-semibold">Customer</th>
            <th className="px-6 py-4 font-semibold">Date & Time</th>
            <th className="px-6 py-4 font-semibold">Guests</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {reservations.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">No reservations found.</td>
            </tr>
          ) : (
            reservations.map((res) => (
              <React.Fragment key={res.id}>
                <tr className={`hover:bg-zinc-800/30 transition-colors cursor-pointer ${expandedId === res.id ? 'bg-zinc-800/20' : ''}`} onClick={() => toggleExpand(res.id)}>
                  <td className="px-6 py-4">
                    {res.type === 'BOWLING' ? (
                      <div className="flex items-center gap-2 text-purple-400">
                        <Trophy className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Bowling</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-blue-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Table</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{res.name}</div>
                    <div className="text-xs text-zinc-500">{res.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-white">{formatDate(res.date)}</div>
                    <div className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {res.time}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-zinc-500" />
                      <span className="text-white font-medium">{res.guests}</span>
                    </div>
                    {res.lanes && (
                      <div className="text-[10px] text-purple-400 uppercase font-bold mt-1">
                        {res.lanes} Lane(s)
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(res.status)}`}>
                      {res.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-zinc-500 hover:text-white">
                      {expandedId === res.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </td>
                </tr>
                {expandedId === res.id && (
                  <tr>
                    <td colSpan={6} className="px-6 py-6 bg-zinc-800/10 border-b border-zinc-800">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Details */}
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <User className="w-4 h-4" /> Reservation Details
                          </h4>
                          <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Customer</p>
                                <p className="text-sm text-white flex items-center gap-2"><User className="w-3 h-3" /> {res.name}</p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Phone</p>
                                <p className="text-sm text-white flex items-center gap-2"><Phone className="w-3 h-3" /> {res.phone}</p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Email</p>
                                <p className="text-sm text-white flex items-center gap-2"><Mail className="w-3 h-3" /> {res.email}</p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Requested At</p>
                                <p className="text-sm text-zinc-400">{formatDate(res.createdAt)}</p>
                              </div>
                            </div>
                            
                            {res.message && (
                              <div className="pt-4 border-t border-zinc-800">
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1 flex items-center gap-1">
                                  <MessageSquare className="w-3 h-3" /> Message
                                </p>
                                <p className="text-sm text-zinc-300 italic">"{res.message}"</p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" /> Manage Status
                          </h4>
                          <div className="space-y-4">
                            <button 
                              onClick={() => updateStatus(res.id, 'confirmed')}
                              disabled={loading === res.id || res.status === 'confirmed'}
                              className="w-full px-4 py-3 bg-emerald-500/10 text-emerald-500 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-emerald-500/20 transition-all border border-emerald-500/20 disabled:opacity-50"
                            >
                              <CheckCircle className="w-5 h-5" /> Confirm Reservation
                            </button>
                            
                            <button 
                              onClick={() => updateStatus(res.id, 'cancelled')}
                              disabled={loading === res.id || res.status === 'cancelled'}
                              className="w-full px-4 py-3 bg-red-500/10 text-red-500 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-red-500/20 transition-all border border-red-500/20 disabled:opacity-50"
                            >
                              <XCircle className="w-5 h-5" /> Cancel Reservation
                            </button>

                            <button 
                              onClick={() => updateStatus(res.id, 'pending')}
                              disabled={loading === res.id || res.status === 'pending'}
                              className="w-full px-4 py-3 bg-zinc-800 text-zinc-400 rounded-xl text-sm font-medium hover:bg-zinc-700 hover:text-white transition-all disabled:opacity-50"
                            >
                              Reset to Pending
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
