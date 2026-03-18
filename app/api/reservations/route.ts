import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Convert guests to Int
    const guests = typeof data.guests === 'string' && data.guests.includes('+') 
      ? 10 
      : parseInt(data.guests) || 2

    const reservation = await prisma.reservation.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        type: data.type || 'RESTAURANT',
        date: new Date(data.date),
        time: data.time,
        guests: guests,
        lanes: data.lanes ? parseInt(data.lanes) : null,
        message: data.message || '',
        status: 'PENDING'
      }
    })

    return NextResponse.json({ success: true, reservation })
  } catch (error: any) {
    console.error('Reservation Error:', error)
    return NextResponse.json({ error: error.message || 'Failed to create reservation' }, { status: 500 })
  }
}
