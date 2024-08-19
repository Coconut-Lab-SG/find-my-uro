import { MostSearchedCityType } from '@/app/_lib/definitions/region'
import { getMostSearchedCities } from '@/app/_lib/services/landing-page/most-searched-cities'
import Link from 'next/link'

export async function MostSearchedCities() {
  const data = await getMostSearchedCities()

  return (
    <div className="flex flex-col gap-y-2 max-w-[1140px] mx-auto w-full px-5">
      <p className="text-2xl italic font-medium">Most Searched Cities</p>
      <div className="grid grid-cols-2 p-4 gap-3 mobileL:grid-cols-4">{data?.map((city) => <CityLabel key={city.id} city={city} />)}</div>
    </div>
  )
}

// Composing component
type Props = {
  city: MostSearchedCityType
}

function CityLabel({ city }: Props) {
  const titleQuery = encodeURIComponent(city.location)
  const query = `city_id=${city.id}&state_id=${city.state_id}&distance=5000&location_based=yes&latitude=${city.latitude}&longitude=${city.longitude}&title=${titleQuery}`

  return (
    <Link prefetch={false} href={`/search?${query}`}>
      {city.state_name}, {city.state_code}
    </Link>
  )
}
