import { RateUrologistType } from '@/app/_lib/definitions/urologist-review'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  body: RateUrologistType
}

export async function urologistRatePost({ body }: Props) {
  const fetchConfig: FetchConfigType = {
    url: '/api/urologist/review-urologist',
    bodyData: body,
    method: 'POST',
  }

  const response = await fetcher<RateUrologistType>(fetchConfig)
  return response
}
