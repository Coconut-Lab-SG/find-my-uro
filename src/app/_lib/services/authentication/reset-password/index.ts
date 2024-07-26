import { forgotPasswordSchema } from '@/app/_lib/definitions/authentication-form'
import { MessageResponseType } from '@/app/_lib/types/authentication'
import { z } from 'zod'
import fetcher, { FetchConfigType } from '../../fetcher'

type ResetPasswordProps = z.infer<typeof forgotPasswordSchema>

export async function ResetPassword(props: ResetPasswordProps) {
  const fetchConfig: FetchConfigType = {
    url: '/api/reset',
    bodyData: props,
    method: 'POST',
  }

  const response = await fetcher<MessageResponseType>(fetchConfig)
  return response
}
