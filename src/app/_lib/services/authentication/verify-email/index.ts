import fetcher, { FetchConfigType } from '../../fetcher'

type EmailVerificationProps = {
  verification_token: string
}

export async function VerifyEmail({ verification_token }: EmailVerificationProps) {
  const fetchConfig: FetchConfigType = {
    url: `/api-verification/${verification_token}`,
    bodyData: null,
    method: 'GET',
  }

  const response = await fetcher<unknown>(fetchConfig)
  return response
}
