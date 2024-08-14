import { RateUrologistType } from '@/app/_lib/definitions/urologist-review'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  body: RateUrologistType
  token: string
}

export async function urologistRatePost({ body, token }: Props) {
  const fetchConfig: FetchConfigType = {
    url: '/api/urologist/review-urologist',
    bodyData: body,
    method: 'POST',
    token: token,
  }

  const response = await fetcher<RateUrologistType>(fetchConfig)
  return response
}
