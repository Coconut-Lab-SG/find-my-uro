import { UrologistReviewResponseSchema } from '@/app/_lib/definitions/urologist-review'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  name: string
  cursor?: string
}

export async function getUrologistReview({ name, cursor }: Props) {
  const fetchConfig: FetchConfigType = {
    url: cursor ? `/api/urologist/review-data?slug=${name}&cursor=${cursor}` : `/api/urologist/review-data?slug=${name}`,
    bodyData: null,
    method: 'GET',
  }

  const response = await fetcher<any>(fetchConfig)
  const parsedData = UrologistReviewResponseSchema.parse(response)

  return parsedData
}
