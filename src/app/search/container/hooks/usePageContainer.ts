import { useState } from 'react'
import { SearchParamsProps } from '../../page'

export function usePageContainer(props: SearchParamsProps) {
  const [coordinate, setCoordinate] = useState({
    latitude: parseFloat(props.latitude) ?? 40.7127837, // Default latitude
    longitude: parseFloat(props.longitude) ?? -74.0059413, // Default longitude
  })

  function setUrologistCoordinate(latitude: number, longitude: number) {
    setCoordinate({
      latitude: latitude,
      longitude: longitude,
    })
  }

  return {
    coordinate,
    setUrologistCoordinate,
  }
}
