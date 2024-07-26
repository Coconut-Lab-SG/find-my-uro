import { MessageResponseType } from '@/app/_lib/types/authentication'
import fetcher, { FetchConfigType } from '../../fetcher'

export async function Logout({ token }: { token: string }) {
  const fetchConfig: FetchConfigType = {
    url: `/api/logout?token=${token}`,
    bodyData: null,
    method: 'GET',
    token: token,
  }

  const response = await fetcher<MessageResponseType>(fetchConfig)
  return response
}
