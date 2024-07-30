import { envVars } from '@/app/_lib/constants/env-vars'
import { UrologistResponse } from '@/app/_lib/types/urologist'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  name: string
}

export async function getUrologistProfile({ name }: Props) {
  const fetchConfig: FetchConfigType = {
    // Note: Need to define app base URL for server-side fetch
    url: `${envVars.APP_BASE_URL}/api/urologist?slug=${name}`,
    bodyData: null,
    method: 'GET',
  }

  const response = await fetcher<UrologistResponse>(fetchConfig)
  return response.data
}
