import { envVars } from '@/app/_lib/constants/env-vars'
import { UrologistReviewTypeSchema } from '@/app/_lib/definitions/urologist-review'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  name: string
}

export async function getUrologistReview({ name }: Props) {
  const fetchConfig: FetchConfigType = {
    // Note: Need to define app base URL for server-side fetch
    url: `${envVars.APP_BASE_URL}/api/urologist/review-data?slug=${name}`,
    bodyData: null,
    method: 'GET',
  }

  const response = await fetcher<any>(fetchConfig)
  const parsedData = UrologistReviewTypeSchema.parse(response)

  return parsedData
}
