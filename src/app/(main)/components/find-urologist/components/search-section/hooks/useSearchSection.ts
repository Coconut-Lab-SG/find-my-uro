import { LocationType } from '@/app/_lib/definitions/search-urologist'
import { sendAnalyticEvent } from '@/app/_lib/helpers/GoogleAnalyticsHelpers'
import { searchRegion } from '@/app/_lib/services/landing-page/search-region'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

export function useSearchSection() {
  const router = useRouter()

  // Input field state
  const [locationInput, setLocationInput] = useState('')
  const [urologistInput, setUrologistInput] = useState('')
  const [error, setError] = useState({
    emptyValue: {
      isError: false,
      message: '',
    },
    region: {
      isError: false,
      message: '',
    },
  })

  // Location search results state
  const [loadingLocation, setLoadingLocation] = useState(false)
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
          emptyValue: {
            isError: false,
            message: '',
          },
        })
        // Hide suggestion and loading location loader if input is below minimum
        setLoadingLocation(false)
        setShowSuggestion(false)
      } else {
        // When user modified location input, show loading state on suggestion section
        setLoadingLocation(true)
        setShowSuggestion(true)
      }
      return setLocationInput(inputValue.trimStart()) // trim whitespace at the start of the keyword
    }
    return setUrologistInput(inputValue)
  }

  async function handleRegionInput(keyword: string) {
    if (keyword.length > 2) {
      try {
        await searchRegion({ keyword }).then((resp) => {
          setLocationResults(resp.data)
          setLoadingLocation(false)
        })
      } catch (error) {
        console.error(error)
      }
    }
  }

  function resetInputError() {
    setError({
      emptyValue: {
        isError: false,
        message: '',
      },
      region: {
        isError: false,
        message: '',
      },
    })
  }

  function handleSelectLocation(input: LocationType) {
    setLocationInput(input.location)
    setSelectedLocation(input)
    setShowSuggestion(false)
  }

  function handleSubmitSearch() {
    // Error validation if both location and keyword input are empty
    if (!locationInput && !urologistInput) {
      return setError({
        ...error,
        emptyValue: {
          isError: true,
          message: 'You must fill at least 1 field',
        },
      })
    }

    // Show error if urologist input is filled and location input also already filled
    if (urologistInput.length > 0) {
      if (locationInput.length > 0 && locationInput.length < 3) {
        return setError({
          region: {
            isError: true,
            message: 'The keyword must be at least 3 characters.',
          },
          emptyValue: {
            isError: false,
            message: '',
          },
        })
      }
    }

    // Default body data structure with mandatory properties
    const data: Record<string, any> = {
      location_based: 'no',
      keyword: urologistInput,

      /* Add title query for search result page title
      // For example: 
      // urologistInput = "Maria" -> Search page title will be "Search result for: Maria."
      */
      title: urologistInput,
    }

    // Conditionally add more properties if locationInput is not null or an empty string
    if (locationInput) {
      data.city_id = selectedLocation?.city_id
      data.distance = 5000
      data.location_based = 'yes'
      data.location = selectedLocation?.location
      data.latitude = selectedLocation?.latitude
      data.longitude = selectedLocation?.longitude
      data.state_id = selectedLocation?.state_id

      // Remove title props since we're gonna use data.location for search page title
      delete data.title
    }

    // Construct query string based on final data object
    const queryParams = new URLSearchParams(data).toString()

    // Send event to GA
    if (data.keyword && !data.location) {
      sendAnalyticEvent({
        event_category: 'search',
        event_value: {},
      })
    }

    // Redirect to search page
    router.push(`/search?${queryParams}`)
  }

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (locationInput) {
        handleRegionInput(locationInput)
      }
    }, 500)

    return () => {
      clearTimeout(debounceTimeout)
    }
  }, [locationInput])

  return {
    loadingLocation,
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
