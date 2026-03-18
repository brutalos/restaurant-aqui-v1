'use client'

import React, { useState } from 'react'
import { 
  Truck, 
  Package, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Clock, 
  XCircle, 
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  User
} from 'lucide-react'

type OrderItem = {
  id: string
  quantity: number
  price: number
  product: {
    name: string
    price: number
  }
}

type Order = {
  id: string
  customerName: string
  customerEmail: string
  customerPhone: string
  deliveryAddress: string | null
  deliveryLat: number | null
  deliveryLng: number | null
  woltDeliveryFee: number | null
  stripeIntentId: string | null
  woltDeliveryId: string | null
  woltTrackingUrl: string | null
  total: number
  status: string
  createdAt: Date
  items: OrderItem[]
}

interface OrdersListProps {
  initialOrders: any[]
}

export default function OrdersList({ initialOrders }: OrdersListProps) {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null)
  const [loading, setLoading] = useState<string | null>(null)

  const toggleExpand = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId)
  }

  const updateStatus = async (orderId: string, newStatus: string) => {
    setLoading(orderId)
    try {
      const res = await fetch(`/api/admin/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) {
        setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o))
      }
    } catch (error) {
      console.error('Failed to update status:', error)
    } finally {
      setLoading(null)
    }
  }

  const dispatchWolt = async (orderId: string) => {
    setLoading(orderId)
    try {
      const res = await fetch(`/api/admin/orders/${orderId}/dispatch`, {
        method: 'POST',
      })
      if (res.ok) {
        const data = await res.json()
        setOrders(orders.map(o => o.id === orderId ? { 
          ...o, 
          woltDeliveryId: data.woltDeliveryId, 
          woltTrackingUrl: data.woltTrackingUrl,
          status: 'dispatched' 
        } : o))
        alert('Wolt courier dispatched successfully!')
      } else {
        const error = await res.text()
        alert(`Failed to dispatch Wolt: ${error}`)
      }
    } catch (error) {
      console.error('Failed to dispatch Wolt:', error)
      alert('Failed to dispatch Wolt. Check console for details.')
    } finally {
      setLoading(null)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return 'text-emerald-500 bg-emerald-500/10'
      case 'preparing': return 'text-amber-500 bg-amber-500/10'
      case 'ready_for_pickup': return 'text-blue-500 bg-blue-500/10'
      case 'dispatched': return 'text-purple-500 bg-purple-500/10'
      case 'delivered': return 'text-zinc-400 bg-zinc-800'
      case 'cancelled': return 'text-red-500 bg-red-500/10'
      default: return 'text-zinc-400 bg-zinc-800'
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-zinc-800/50 text-zinc-400 text-xs uppercase tracking-wider">
            <th className="px-6 py-4 font-semibold">Order ID</th>
            <th className="px-6 py-4 font-semibold">Customer</th>
            <th className="px-6 py-4 font-semibold">Total</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {orders.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">No orders found.</td>
            </tr>
          ) : (
            orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr className={`hover:bg-zinc-800/30 transition-colors cursor-pointer ${expandedOrderId === order.id ? 'bg-zinc-800/20' : ''}`} onClick={() => toggleExpand(order.id)}>
                  <td className="px-6 py-4 font-mono text-xs text-zinc-400">#{order.id.slice(-6).toUpperCase()}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{order.customerName}</div>
                    <div className="text-xs text-zinc-500">{order.customerEmail}</div>
                  </td>
                  <td className="px-6 py-4 font-bold text-white">€{order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-400">
                    {new Intl.DateTimeFormat('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit'
                    }).format(new Date(order.createdAt))}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-zinc-500 hover:text-white">
                      {expandedOrderId === order.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </td>
                </tr>
                {expandedOrderId === order.id && (
                  <tr>
                    <td colSpan={6} className="px-6 py-6 bg-zinc-800/10 border-b border-zinc-800">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Order Items */}
                        <div className="lg:col-span-1">
                          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Package className="w-4 h-4" /> Order Items
                          </h4>
                          <div className="space-y-3">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex justify-between items-center bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                                <div>
                                  <div className="text-sm font-medium text-white">{item.product.name}</div>
                                  <div className="text-xs text-zinc-500">Qty: {item.quantity} × €{item.price.toFixed(2)}</div>
                                </div>
                                <div className="text-sm font-bold text-white">€{(item.quantity * item.price).toFixed(2)}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Customer & Delivery */}
                        <div className="lg:col-span-1">
                          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <User className="w-4 h-4" /> Customer & Delivery
                          </h4>
                          <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 space-y-4">
                            <div className="flex items-center gap-3">
                              <User className="w-4 h-4 text-zinc-500" />
                              <div className="text-sm text-white">{order.customerName}</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-zinc-500" />
                              <div className="text-sm text-white">{order.customerPhone}</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-zinc-500" />
                              <div className="text-sm text-white">{order.customerEmail}</div>
                            </div>
                            {order.deliveryAddress && (
                              <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-zinc-500 mt-1" />
                                <div className="text-sm text-white leading-relaxed">{order.deliveryAddress}</div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="lg:col-span-1">
                          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" /> Actions
                          </h4>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                              <button 
                                onClick={() => updateStatus(order.id, 'preparing')}
                                disabled={loading === order.id || order.status === 'preparing'}
                                className="px-4 py-2 bg-amber-500/10 text-amber-500 rounded-lg text-sm font-medium border border-amber-500/20 hover:bg-amber-500/20 transition-all disabled:opacity-50"
                              >
                                Preparing
                              </button>
                              <button 
                                onClick={() => updateStatus(order.id, 'ready_for_pickup')}
                                disabled={loading === order.id || order.status === 'ready_for_pickup'}
                                className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-lg text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 transition-all disabled:opacity-50"
                              >
                                Ready
                              </button>
                            </div>
                            
                            {order.deliveryAddress && !order.woltDeliveryId && (
                              <button 
                                onClick={() => dispatchWolt(order.id)}
                                disabled={loading === order.id}
                                className="w-full px-4 py-3 bg-emerald-500 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                              >
                                <Truck className="w-5 h-5" />
                                Dispatch Wolt Courier
                              </button>
                            )}

                            {order.woltTrackingUrl && (
                              <a 
                                href={order.woltTrackingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full px-4 py-3 bg-zinc-800 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all border border-zinc-700"
                              >
                                <ExternalLink className="w-5 h-5" />
                                Track Wolt Delivery
                              </a>
                            )}

                            <button 
                              onClick={() => updateStatus(order.id, 'delivered')}
                              disabled={loading === order.id || order.status === 'delivered'}
                              className="w-full px-4 py-3 bg-zinc-800 text-zinc-400 rounded-xl text-sm font-medium hover:bg-zinc-700 hover:text-white transition-all disabled:opacity-50"
                            >
                              Mark as Delivered
                            </button>
                            
                            <button 
                              onClick={() => updateStatus(order.id, 'cancelled')}
                              disabled={loading === order.id || order.status === 'cancelled'}
                              className="w-full px-4 py-3 bg-red-500/10 text-red-500 rounded-xl text-sm font-medium hover:bg-red-500/20 transition-all flex items-center justify-center gap-2 border border-red-500/20 disabled:opacity-50"
                            >
                              <XCircle className="w-4 h-4" /> Cancel Order
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
