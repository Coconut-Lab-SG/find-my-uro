'use client'

import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { useSearchSection } from './hooks/useSearchSection'

export function SearchSection() {
  const { locationInput, urologistInput, error, locationResults, showSuggestion, handleInput, handleSelectLocation, handleSubmitSearch } =
    useSearchSection()

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
        {error.region.isError && <span className="text-sm text-red-500">{error.region.message}</span>}
        {/* Search result section */}
        {showSuggestion && (
          <section className="absolute top-[50px] border border-gray-100 bg-white shadow-md max-h-60 overflow-y-auto w-full">
            {locationResults.length > 0 ? (
              locationResults.map((location) => (
                <div
                  key={location.city_id}
                  className="p-2 border-b cursor-pointer hover:bg-gray-200 last:border-none"
                  onClick={() => handleSelectLocation(location)}
                >
                  {location.location}
                </div>
              ))
            ) : (
              <div className="p-2">
                <span>Location not found.</span>
              </div>
            )}
          </section>
        )}
      </div>
      <Input className="h-11 text-lg bg-white" placeholder="Name of Urologist" name="urologist_name" value={urologistInput} onChange={handleInput} />
      <Button className="bg-[#f6a404] text-white hover:bg-[#f6a404]-300 h-fit" onClick={handleSubmitSearch}>
        Search
      </Button>
    </div>
  )
}
