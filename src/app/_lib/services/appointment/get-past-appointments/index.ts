import { AppointmentListResponse } from '@/app/_lib/definitions/appointment'
import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  token: string
  page?: string
}

export async function getPastAppointments({ token, page }: Props) {
  const fetchConfig: FetchConfigType = {
    url: page ? `/api/user/past-appointments?page=${page}` : '/api/user/past-appointments?page=1',
    bodyData: null,
    method: 'GET',
    token: token,
  }

  const response = await fetcher<unknown>(fetchConfig)
  const data = AppointmentListResponse.parse(response)
  return data
}