import { AuthenticationResponseType } from '@/app/_lib/types/authentication'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  body: {
    email: string
    password: string
  }
}

export async function Login({ body }: Props) {
  const fetchConfig: FetchConfigType = {
    url: '/api/login',
    bodyData: body,
    method: 'POST',
  }

  const response = await fetcher<AuthenticationResponseType>(fetchConfig)
  return response.data
}
