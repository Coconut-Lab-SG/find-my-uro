import { AccessTokenType } from '../types/authentication'
import { decodeJWTCookie } from './CookieHelpers'

export function getUserData({ token }: { token: string }) {
  const userData: AccessTokenType | null = decodeJWTCookie(token)

  if (!userData) return

  const effectiveData = {
    email: userData.email,
    first_name: userData.first_name,
    last_name: userData.last_name,
    avatar: userData.avatar,
  }
  return effectiveData
}
