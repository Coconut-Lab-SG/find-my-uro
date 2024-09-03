import fetcher, { FetchConfigType } from '../../fetcher'

type Props = {
  urologistId: string
}

export async function shareUrologist({ urologistId }: Props) {
  const fetchConfig: FetchConfigType = {
    url: '/api/urologist/share-urologist',
    bodyData: {
      urologist_id: urologistId,
      ip_address: '192.168.1.1',
      device: 'android',
    },
    method: 'POST',
  }

  const response = await fetcher<unknown>(fetchConfig)
  return response
}
