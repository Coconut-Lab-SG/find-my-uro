import { getCookie } from 'cookies-next'
import { jwtDecode } from 'jwt-decode'
import { AccessTokenType } from '../types/authentication'

export function decodeJWTCookie(): AccessTokenType | null {
  const token = getCookie('access_token')

  if (token) {
    const decodedToken: AccessTokenType = jwtDecode(token as string)
    return decodedToken
  }

  return null
}
