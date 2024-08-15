import { envVars } from '@/app/_lib/constants/env-vars'
import { UserDetailResponseSchema } from '@/app/_lib/definitions/user'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  token: string
}

export async function getUserDetail({ token }: Props) {
  const fetchConfig: FetchConfigType = {
    url: `${envVars.APP_BASE_URL}/api/user/profile`,
    bodyData: null,
    method: 'GET',
    token: token,
  }

  const response = await fetcher<any>(fetchConfig)
  const data = UserDetailResponseSchema.parse(response)
  return data.data
}
