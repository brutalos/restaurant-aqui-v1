import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Convert guests and lanes to Int
    const guests = typeof data.guests === 'string' && data.guests.includes('+') 
      ? 10 
      : parseInt(data.guests) || 2
    const lanes = parseInt(data.lanes) || 1

    const reservation = await prisma.reservation.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        type: 'BOWLING',
        date: new Date(data.date),
        time: data.time,
        guests: guests,
        lanes: lanes,
        message: data.message || '',
        status: 'PENDING'
      }
    })

    return NextResponse.json({ success: true, reservation })
  } catch (error: any) {
    console.error('Bowling Reservation Error:', error)
    return NextResponse.json({ error: error.message || 'Failed to create bowling reservation' }, { status: 500 })
  }
}
