import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { status } = await req.json()
    const { id } = await params

    const order = await prisma.order.update({
      where: { id },
      data: { status }
    })

    return NextResponse.json(order)
  } catch (err: any) {
    console.error('Update Order Status Error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
