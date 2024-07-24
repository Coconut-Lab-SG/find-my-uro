import { jwtDecode } from 'jwt-decode'
import { AccessTokenType } from '../types/authentication'

export function decodeJWTCookie(token: string): AccessTokenType | null {
  if (token) {
    const decodedToken: AccessTokenType = jwtDecode(token as string)
    return decodedToken
  }

  return null
}
