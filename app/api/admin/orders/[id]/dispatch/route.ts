import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getShipmentPromise, createDelivery } from '@/lib/wolt'

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const order = await prisma.order.findUnique({
      where: { id },
      include: { items: true }
    })

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    if (!order.deliveryStreet || !order.deliveryCity || !order.deliveryPostCode) {
      return NextResponse.json({ error: 'Order does not have complete delivery address details' }, { status: 400 })
    }

    // 1. Get a fresh shipment promise
    const promise = await getShipmentPromise({
      street: order.deliveryStreet,
      city: order.deliveryCity,
      post_code: order.deliveryPostCode,
      parcels: [{
        count: order.items.length,
        price: { amount: Math.round(order.total * 100), currency: 'EUR' }
      }]
    })

    // 2. Create the delivery
    const delivery = await createDelivery({
      shipment_promise_id: promise.id,
      merchant_order_reference_id: order.id,
      recipient: {
        name: order.customerName,
        phone_number: order.customerPhone,
        email: order.customerEmail
      },
      dropoff: {
        location: {
          coordinates: { 
            lat: order.deliveryLat || 0, 
            lon: order.deliveryLng || 0 
          }
        }
      },
      parcels: [{
        count: order.items.length,
        price: { amount: Math.round(order.total * 100), currency: 'EUR' }
      }],
      customer_support: {
        email: 'office@aqui-restaurant.at',
        phone_number: '+43123456789' // Placeholder
      }
    })

    // 3. Update order in DB
    const updatedOrder = await prisma.order.update({
      where: { id: order.id },
      data: {
        woltDeliveryId: delivery.id,
        woltTrackingUrl: delivery.tracking.url,
        status: 'dispatched'
      }
    })

    return NextResponse.json({
      success: true,
      woltDeliveryId: delivery.id,
      woltTrackingUrl: delivery.tracking.url
    })
  } catch (err: any) {
    console.error('Wolt Dispatch Error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
