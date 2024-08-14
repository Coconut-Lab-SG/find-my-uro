import { envVars } from '@/app/_lib/constants/env-vars'
import { UrologistResponseSchema } from '@/app/_lib/definitions/urologist'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  name: string
}

export async function getUrologistProfile({ name }: Props) {
  const fetchConfig: FetchConfigType = {
    // Note: Need to define app base URL for server-side fetch
    url: `${envVars.APP_BASE_URL}/api/urologist/main-data?slug=${name}`,
    bodyData: null,
    method: 'GET',
    cache: 'no-store'
  }

  const response = await fetcher<unknown>(fetchConfig)
  const parsedData = UrologistResponseSchema.parse(response)

  return parsedData
}
