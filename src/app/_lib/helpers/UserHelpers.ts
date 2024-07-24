import { cookies } from 'next/headers'
import { AccessTokenType } from '../types/authentication'
import { decodeJWTCookie } from './CookieHelpers'

export function getUserData() {
  const token = cookies().get('access_token')?.value ?? ''
  const userData: AccessTokenType | null = decodeJWTCookie(token)

  if (userData) {
    const effectiveData = {
      email: userData.email,
      first_name: userData.first_name,
      last_name: userData.last_name,
    }
    return effectiveData
  }

  return null
}