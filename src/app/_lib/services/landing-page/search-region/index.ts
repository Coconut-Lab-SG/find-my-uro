import { LocationResponseSchema } from '@/app/_lib/definitions/search-urologist'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  keyword: string
  limit?: number | null
}

export async function searchRegion({ keyword, limit }: Props) {
  const fetchConfig: FetchConfigType = {
    // Note: Need to define app base URL for server-side fetch
    url: limit ? `/api/locations?keyword=${keyword}&limit=${limit}` : `/api/locations?keyword=${keyword}`,
    bodyData: null,
    method: 'GET',
  }

  const response = await fetcher<unknown>(fetchConfig)
  const data = LocationResponseSchema.parse(response)
  return data
}
