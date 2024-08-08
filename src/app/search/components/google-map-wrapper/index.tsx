'use client'

import { GoogleMapsComponent } from '@/app/_components/maps/google-maps-component'

type Props = {
  latitude: number
  longitude: number
}

export function GoogleMapWrapper({ latitude, longitude }: Props) {
  return (
    <div className="relative -mx-5 laptopM:mx-0">
      <div className="h-[230px] w-screen bg-gray-400 mx-auto laptopM:h-[824px] laptopM:w-[360px]">
        {/* TODO: Change lat lng accordingly based on API data later */}
        <GoogleMapsComponent location={{ lat: latitude, lng: longitude }} />
      </div>
    </div>
  )
}
