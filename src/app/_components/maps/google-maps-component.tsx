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
  lat: 35.8799866,
  lng: 76.5048004,
}

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'greedy',
  mapTypeId: 'roadmap',
}

const defaultMapZoom = 10

export function GoogleMapsComponent({ location }: GoogleMapProps) {
  return (
    <MapProvider>
      <div className="size-full">
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={{ lat: location.lat, lng: location.lng }}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
        >
          <Marker position={location} />
        </GoogleMap>
      </div>
    </MapProvider>
  )
}
