import { registerSchema } from '@/app/_lib/definitions/authentication-form'
import { AuthenticationResponseType } from '@/app/_lib/types/authentication'
import { z } from 'zod'
import fetcher, { FetchConfigType } from '../../fetcher'

type RegisterBodyProps = z.infer<typeof registerSchema>

export async function Register(props: RegisterBodyProps) {
  const fetchConfig: FetchConfigType = {
    url: '/api/register',
    bodyData: props,
    method: 'POST',
  }

  const response = await fetcher<AuthenticationResponseType>(fetchConfig)
  return response.data
}
