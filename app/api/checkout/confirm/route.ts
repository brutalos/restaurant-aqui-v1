import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const {
      items,
      total,
      customerName,
      customerEmail,
      customerPhone,
      deliveryAddress,
      deliveryStreet,
      deliveryCity,
      deliveryPostCode,
      deliveryLat,
      deliveryLng,
      woltDeliveryFee,
      stripeIntentId
    } = await req.json()

    // Create the order
    const order = await prisma.order.create({
      data: {
        total,
        customerName,
        customerEmail,
        customerPhone,
        deliveryAddress,
        deliveryStreet,
        deliveryCity,
        deliveryPostCode,
        deliveryLat,
        deliveryLng,
        woltDeliveryFee,
        stripeIntentId,
        status: 'paid', // Assuming payment was successful before calling this
        items: {
          create: items.map((item: any) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price
          }))
        }
      },
      include: {
        items: true
      }
    })

    return NextResponse.json({ success: true, orderId: order.id })
  } catch (err: any) {
    console.error('Order Confirmation Error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
