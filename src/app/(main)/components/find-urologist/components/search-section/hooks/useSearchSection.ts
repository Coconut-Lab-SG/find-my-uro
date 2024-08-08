import { LocationType } from '@/app/_lib/definitions/search-urologist'
import { searchRegion } from '@/app/_lib/services/landing-page/search-region'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

export function useSearchSection() {
  const router = useRouter()
  // Input field state
  const [locationInput, setLocationInput] = useState('')
  const [urologistInput, setUrologistInput] = useState('')
  const [error, setError] = useState({
    region: {
      isError: false,
      message: '',
    },
  })

  // Location search results state
  const [locationResults, setLocationResults] = useState<LocationType[]>([])
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null)

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    resetInputError()
    const inputValue = e.target.value
    if (e.target.name === 'region') {
      if (inputValue.length < 3) {
        setError({
          ...error,
          region: {
            isError: true,
            message: 'The keyword must be at least 3 characters.',
          },
        })
      }
      return setLocationInput(inputValue.trim())
    }
    return setUrologistInput(inputValue)
  }

  async function handleRegionInput(keyword: string) {
    if (keyword.length > 2) {
      try {
        await searchRegion({ keyword }).then((resp) => {
          setLocationResults(resp.data)
          setShowSuggestion(true)
        })
      } catch (error) {
        console.error(error)
      }
    }
  }

  function resetInputError() {
    setError({
      region: {
        isError: false,
        message: '',
      },
    })
    setShowSuggestion(false)
  }

  function handleSelectLocation(input: LocationType) {
    setLocationInput(input.location)
    setSelectedLocation(input)
    setLocationResults([])
  }

  function handleSubmitSearch() {
    // Error validation
    if (!locationInput) {
      return setError({
        ...error,
        region: {
          isError: true,
          message: 'Please enter location keyword.',
        },
      })
    }

    const data = {
      city_id: selectedLocation?.city_id,
      distance: 5000, // in km, TODO: adjust later accordingly with BE team
      location: selectedLocation?.location,
      latitude: selectedLocation?.latitude,
      longitude: selectedLocation?.latitude,
      state_id: selectedLocation?.state_id,
      keyword: urologistInput,
    }

    const queryParams = `keyword=${data.keyword}&location=${data.location}&state_id=${data.state_id}&city_id=${data.city_id}&distance=${data.distance}&latitude=${data.latitude}&longitude=${data.longitude}`
    router.push(`/search?${queryParams}`)
  }

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (showSuggestion) return

      if (locationInput) {
        handleRegionInput(locationInput)
      }
    }, 500)

    return () => {
      clearTimeout(debounceTimeout)
    }
  }, [locationInput])

  return {
    locationInput,
    urologistInput,
    locationResults,
    showSuggestion,
    error,
    handleInput,
    handleSelectLocation,
    handleSubmitSearch,
  }
}
