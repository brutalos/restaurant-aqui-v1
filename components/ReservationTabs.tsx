'use client'

import React, { useState } from 'react'
import { Users, Trophy } from 'lucide-react'
import TableReservationForm from './TableReservationForm'
import BowlingReservationForm from './BowlingReservationForm'

const ReservationTabs = () => {
  const [activeTab, setActiveTab] = useState<'restaurant' | 'bowling'>('restaurant')

  return (
    <div className="space-y-12">
      {/* Tab Switcher */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setActiveTab('restaurant')}
          className={`px-8 py-4 font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 ${
            activeTab === 'restaurant' 
              ? 'bg-primary text-white shadow-xl scale-105' 
              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
          }`}
        >
          <Users size={20} />
          Restaurant
        </button>
        <button
          onClick={() => setActiveTab('bowling')}
          className={`px-8 py-4 font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 ${
            activeTab === 'bowling' 
              ? 'bg-primary text-white shadow-xl scale-105' 
              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
          }`}
        >
          <Trophy size={20} />
          Bowling
        </button>
      </div>

      {activeTab === 'restaurant' ? (
        <TableReservationForm />
      ) : (
        <BowlingReservationForm />
      )}
    </div>
  )
}

export default ReservationTabs
