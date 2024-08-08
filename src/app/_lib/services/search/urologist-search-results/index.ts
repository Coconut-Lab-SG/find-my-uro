import { UrologistSearchResultsResponseSchema } from '@/app/_lib/definitions/search-urologist'
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

  const response = await fetcher<unknown>(fetchConfig)
  const data = UrologistSearchResultsResponseSchema.parse(response)
  return data
}
