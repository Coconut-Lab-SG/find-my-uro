import { envVars } from '@/app/_lib/constants/env-vars'
import { LandingPageDatasetSchema } from '@/app/_lib/definitions/landing-page'
import fetcher, { FetchConfigType } from '../../fetcher'

export async function getHomepageDataset() {
  const fetchConfig: FetchConfigType = {
    // Note: Need to define app base URL for server-side fetch
    url: `${envVars.APP_BASE_URL}/api/landing-page/main-search`,
    bodyData: null,
    method: 'GET',
  }

  const response = await fetcher<unknown>(fetchConfig)
  const data = LandingPageDatasetSchema.parse(response)
  return data
}
