import { envVars } from '@/app/_lib/constants/env-vars'
import { MostSeachedCitiesResponseSchema } from '@/app/_lib/definitions/region'
import fetcher, { FetchConfigType } from '../../fetcher'

export async function getMostSearchedCities(limit?: number) {
  const fetchConfig: FetchConfigType = {
    // Note: Need to define app base URL for server-side fetch
    url: `${envVars.APP_BASE_URL}/api/landing-page/most-searched-cities`,
    bodyData: null,
    method: 'GET',
  }

  const response = await fetcher<unknown>(fetchConfig)
  const data = MostSeachedCitiesResponseSchema.parse(response)
  return data.data
}
