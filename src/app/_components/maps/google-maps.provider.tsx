//Since the map will be loaded and displayed on client side
'use client'

import { envVars } from '@/app/_lib/constants/env-vars'
// Import necessary modules and functions from external libraries and our own project
import { Libraries, useJsApiLoader } from '@react-google-maps/api'
import { ReactNode } from 'react'

// Define a list of libraries to load from the Google Maps API
const libraries = ['places', 'drawing', 'geometry']

// Define a function component called MapProvider that takes a children prop
export function MapProvider({ children }: { children: ReactNode }) {
  // Load the Google Maps JavaScript API asynchronously
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: envVars.GOOGLE_MAP_API_KEY as string,
    libraries: libraries as Libraries,
  })

  if (loadError) return <p>Encountered error while loading google maps</p>

  if (!scriptLoaded) return <div className="flex items-center justify-center h-full text-gray-100">Map script is loading...</div>

  // Return the children prop wrapped by this MapProvider component
  return children
}
