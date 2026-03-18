'use client'

import React, { useEffect, useRef } from 'react'

interface GoogleMapProps {
  address: string
  lat: number
  lng: number
  zoom?: number
}

const GoogleMap = ({ address, lat, lng, zoom = 15 }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadMap = async () => {
      if (!mapRef.current) return

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      if (!apiKey) {
        console.error("Google Maps API key is missing")
        return
      }

      // Load the Google Maps script if not already loaded
      if (!(window as any).google) {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&v=beta`
        script.async = true
        script.defer = true
        document.head.appendChild(script)

        await new Promise((resolve) => {
          script.onload = resolve
        })
      }

      const { Map, InfoWindow } = await (window as any).google.maps.importLibrary("maps") as any
      const { AdvancedMarkerElement } = await (window as any).google.maps.importLibrary("marker") as any

      const position = { lat, lng }
      const map = new Map(mapRef.current, {
        zoom,
        center: position,
        mapId: "AQUI_MAP_ID", // Optional: replace with a real map ID if available
        disableDefaultUI: true,
        styles: [
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#ffffff" }]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#000000" }, { "lightness": 13 }]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#000000" }]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{ "color": "#212121" }]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "color": "#333333" }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#000000" }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#000000" }, { "lightness": 17 }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }]
          }
        ]
      })

      const marker = new AdvancedMarkerElement({
        map,
        position,
        title: "Restaurant Aqui",
      })

      const infoWindow = new InfoWindow({
        content: `
          <div style="padding: 10px; color: black;">
            <h3 style="margin: 0 0 5px 0; font-weight: bold;">Restaurant Aqui</h3>
            <p style="margin: 0; font-size: 14px;">${address}</p>
          </div>
        `,
      })

      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
        })
      })
    }

    loadMap()
  }, [address, lat, lng, zoom])

  return <div ref={mapRef} className="w-full h-full" />
}

export default GoogleMap
