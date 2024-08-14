import { AppointmentFormType, CreateAppointmentResponseSchema } from '@/app/_lib/definitions/appointment'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  body: AppointmentFormType
  token: string
}

export async function createAppointment({ body, token }: Props) {
  const fetchConfig: FetchConfigType = {
    url: '/api/appointment',
    bodyData: body,
    method: 'POST',
    token: token,
  }

  const response = await fetcher<unknown>(fetchConfig)
  const data = CreateAppointmentResponseSchema.parse(response)
  return data
}
