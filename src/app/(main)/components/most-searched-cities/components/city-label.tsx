'use client'

import { Button } from '@/app/_components/ui/button'
import { MostSearchedCityType } from '@/app/_lib/definitions/region'
import { sendAnalyticEvent } from '@/app/_lib/helpers/GoogleAnalyticsHelpers'
import { useRouter } from 'next/navigation'

type Props = {
  city: MostSearchedCityType
}

export function CityLabel({ city }: Props) {
  const router = useRouter()

  const query = `location=${city.location}&city_id=${city.id}&state_id=${city.state_id}&distance=5000&location_based=yes&latitude=${city.latitude}&longitude=${city.longitude}`

  function handleClick() {
    sendAnalyticEvent({ event_category: 'search_city', event_value: { location: city.location } })
    router.push(`/search?${query}`)
  }

  return (
    <Button
      variant="ghost"
      className="p-0 h-fit line-clamp-1 text-left bg-transparent text-blue-400 hover:bg-transparent hover:text-blue-500"
      onClick={handleClick}
    >
      {city.location}
    </Button>
  )
}
