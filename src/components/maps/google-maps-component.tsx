/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
'use client'

import { envVars } from '@/constants/env-vars'
import { GoogleMapsEmbed } from '@next/third-parties/google'

type GoogleMapProps = {
  location: {
    lat: number
    lng: number
  }
}

const defaultMapLocation = {
  lat: 35.8799866,
  lng: 76.5048004
}

export function GoogleMapsComponent({ location = defaultMapLocation }: GoogleMapProps) {
  return (
    <GoogleMapsEmbed
      apiKey={envVars.GOOGLE_MAP_API_KEY!}
      height="100%;"
      width="100%;"
      mode="place"
      q={`${location.lat},${location.lng}`}
      center={`${location.lat},${location.lng}`}
      allowfullscreen
      loading='lazy'
    />
  )
};
