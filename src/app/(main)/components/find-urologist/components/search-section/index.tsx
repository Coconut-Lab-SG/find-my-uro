'use client'

import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { LoaderCircle } from 'lucide-react'
import { useSearchSection } from './hooks/useSearchSection'

export function SearchSection() {
  const {
    loadingLocation,
    locationInput,
    urologistInput,
    error,
    locationResults,
    showSuggestion,
    handleInput,
    handleSelectLocation,
    handleSubmitSearch,
  } = useSearchSection()

  /**
   * These components above will be used for conditional rendering.
   * There are 3 states:
   * 1. Display loading state while fetching the location data
   * 2. Display location list if data is available
   * 3. Display location not found if data is not available.
   *
   * Instead of combining them into a single JSX, its better to split it as functional components for readability and maintainability reason.
   */
  function LoadingLocation() {
    return (
      <div className="flex items-center gap-2 justify-center">
        <LoaderCircle size={16} className="animate-spin" />
        <span>Loading...</span>
      </div>
    )
  }

  function LocationList() {
    return locationResults.map((location) => (
      <div
        key={location.city_id}
        className="p-2 border-b cursor-pointer hover:bg-gray-200 last:border-none"
        onClick={() => handleSelectLocation(location)}
      >
        {location.location}
      </div>
    ))
  }

  function LocationNotFound() {
    return (
      <div className="flex justify-center p-2">
        <span>Location not found.</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 mobileL:grid-cols-3 gap-4">
      <div className="relative flex flex-col gap-2">
        <Input
          className="h-11 text-lg bg-white"
          placeholder="Your City, State, or ZIP Code"
          name="region"
          value={locationInput}
          onChange={handleInput}
        />
        {error.emptyValue.isError && <span className="text-sm text-red-500">{error.emptyValue.message}</span>}
        {error.region.isError && <span className="text-sm text-red-500">{error.region.message}</span>}
        {/* Search result section */}
        {showSuggestion && (
          <section className="absolute top-[50px] border border-gray-100 bg-white shadow-md max-h-60 overflow-y-auto w-full">
            {loadingLocation ? <LoadingLocation /> : locationResults.length > 0 ? <LocationList /> : <LocationNotFound />}
          </section>
        )}
      </div>
      <Input className="h-11 text-lg bg-white" placeholder="Name of Urologist" name="urologist_name" value={urologistInput} onChange={handleInput} />
      {/* Disable button if location list is still loading from API */}
      <Button className="bg-[#f6a404] text-white hover:bg-[#f6a404]-300 h-fit" disabled={loadingLocation} onClick={handleSubmitSearch}>
        Search
      </Button>
    </div>
  )
}
