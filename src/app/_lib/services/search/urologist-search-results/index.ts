import { UrologistSearchResultsResponse } from '@/app/_lib/definitions/search-urologist'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  queryParams: string
}

export async function getUrologistSearchResult({ queryParams }: Props) {
  const fetchConfig: FetchConfigType = {
    // Note: Need to define app base URL for server-side fetch
    url: `/api/locations/urologists?${queryParams}`,
    bodyData: null,
    method: 'GET',
  }

  const response = await fetcher<UrologistSearchResultsResponse>(fetchConfig)
  // TODO: Enable zod validation later if API data structure is fixed
  // const data = UrologistSearchResultsResponseSchema.parse(response)
  return response
}
