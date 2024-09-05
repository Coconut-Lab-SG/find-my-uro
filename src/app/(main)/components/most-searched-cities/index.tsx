import { getMostSearchedCities } from '@/app/_lib/services/landing-page/most-searched-cities'
import { CityLabel } from './components/city-label'

export async function MostSearchedCities() {
  const data = await getMostSearchedCities()

  return (
    <div className="flex flex-col gap-y-2 max-w-[1140px] mx-auto w-full px-5">
      <p className="text-2xl italic font-medium">Most Searched Cities</p>
      <div className="grid grid-cols-2 p-4 gap-4 mobileL:grid-cols-4">{data?.map((city) => <CityLabel key={city.id} city={city} />)}</div>
    </div>
  )
}
