import { newPasswordSchema } from '@/app/_lib/definitions/authentication-form'
import { ResetPasswordResponseType } from '@/app/_lib/types/authentication'
import { z } from 'zod'
import fetcher, { FetchConfigType } from '../../fetcher'

type NewPasswordProps = z.infer<typeof newPasswordSchema> & { token: string }

export async function NewPassword(props: NewPasswordProps) {
  const fetchConfig: FetchConfigType = {
    url: '/api/fill-new-password',
    bodyData: {
      password: props.password,
      password_confirm: props.password_confirm,
    },
    method: 'POST',
    token: props.token,
  }

  const response = await fetcher<ResetPasswordResponseType>(fetchConfig)
  return response
}
