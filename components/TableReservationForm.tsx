'use client'

import React, { useState } from 'react'
import { Calendar, Users, Clock, Send } from 'lucide-react'

const TableReservationForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/reservations/table', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Table submit error:', error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white p-12 md:p-20 shadow-2xl border-l-8 border-primary text-center">
        <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Vielen Dank!</h3>
        <p className="text-gray-500 mb-8">
          Ihre Reservierungsanfrage für einen Tisch ist bei uns eingegangen. Wir werden uns in Kürze zur Bestätigung bei Ihnen melden.
        </p>
        <button 
          onClick={() => {
            setStatus('idle')
            setFormData({
              name: '',
              email: '',
              phone: '',
              date: '',
              time: '',
              guests: '2',
              message: ''
            })
          }}
          className="bg-primary text-white px-10 py-5 font-black uppercase tracking-[0.2em] hover:bg-dark transition-all shadow-xl"
        >
          Weitere Reservierung
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-12 md:p-20 shadow-2xl space-y-10 border-l-8 border-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">Vollständiger Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary focus:outline-none px-4 py-4 font-bold uppercase tracking-widest text-sm transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">E-Mail Adresse</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary focus:outline-none px-4 py-4 font-bold uppercase tracking-widest text-sm transition-all"
            placeholder="office@example.at"
          />
        </div>
        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">Telefonnummer</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary focus:outline-none px-4 py-4 font-bold uppercase tracking-widest text-sm transition-all"
            placeholder="+43 676 ..."
          />
        </div>
        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">Personenanzahl</label>
          <div className="relative">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary focus:outline-none pl-12 pr-4 py-4 font-bold uppercase tracking-widest text-sm appearance-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                <option key={num} value={num}>{num} {typeof num === 'number' && num === 1 ? 'Person' : 'Personen'}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">Datum</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary focus:outline-none pl-12 pr-4 py-4 font-bold uppercase tracking-widest text-sm transition-all"
            />
          </div>
        </div>
        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">Uhrzeit</label>
          <div className="relative">
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary focus:outline-none pl-12 pr-4 py-4 font-bold uppercase tracking-widest text-sm transition-all"
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <label className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">Anmerkungen (Optional)</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary focus:outline-none px-4 py-4 font-bold uppercase tracking-widest text-sm transition-all"
          placeholder="Besondere Wünsche, Allergien, etc."
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 font-bold uppercase text-xs tracking-widest">Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group relative inline-flex items-center justify-center px-10 py-6 overflow-hidden font-black text-white bg-dark transition duration-300 ease-out hover:scale-105 shadow-2xl w-full sm:w-auto disabled:opacity-50"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
          <Send className="w-6 h-6" />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease uppercase tracking-[0.2em]">
          {status === 'loading' ? 'Wird gesendet...' : 'Tisch Reservieren'}
        </span>
        <span className="relative invisible uppercase tracking-[0.2em]">
          Tisch Reservieren
        </span>
      </button>
    </form>
  )
}

export default TableReservationForm
