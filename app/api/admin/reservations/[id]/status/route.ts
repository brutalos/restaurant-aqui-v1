import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { status } = await req.json()
    const { id } = await params

    const reservation = await prisma.reservation.update({
      where: { id },
      data: { status }
    })

    return NextResponse.json(reservation)
  } catch (err: any) {
    console.error('Update Reservation Status Error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
