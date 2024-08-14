import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  body: {
    urologist_id: string
  }
  token: string
}

export async function vouchUrologist({ body, token }: Props) {
  const fetchConfig: FetchConfigType = {
    url: '/api/user/vouch-urologist',
    bodyData: body,
    method: 'POST',
    token: token,
  }

  const response = await fetcher<unknown>(fetchConfig)
  return response
}
