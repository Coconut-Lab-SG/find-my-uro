/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
'use client'

import { GoogleMap, Marker } from '@react-google-maps/api'
import { MapProvider } from './google-maps.provider'

type GoogleMapProps = {
  location: {
    lat: number
    lng: number
  }
}

export const defaultMapContainerStyle = {
  width: '100%',
  height: '100%',
}

export const defaultMapLocation = {
  lat: 0,
  lng: 0,
}

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'greedy',
  mapTypeId: 'roadmap',
}

const defaultMapZoom = 10

export function GoogleMapsComponent({ location }: GoogleMapProps) {
  const mapLocation = {
    lat: !isNaN(location.lat) ? location.lat : defaultMapLocation.lat,
    lng: !isNaN(location.lng) ? location.lng : defaultMapLocation.lng,
  }

  return (
    <MapProvider>
      <div className="size-full">
        <GoogleMap mapContainerStyle={defaultMapContainerStyle} center={mapLocation} zoom={defaultMapZoom} options={defaultMapOptions}>
          <Marker position={location} />
        </GoogleMap>
      </div>
    </MapProvider>
  )
}
