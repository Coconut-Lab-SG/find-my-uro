import { cookies } from 'next/headers'
import { decodeJWTCookie } from '../helpers/SessionHelpers'
import { AccessTokenType } from '../types/authentication'

// NOTE: Call this hooks inside RSC (Server Component)
export function useUser() {
  function getUserData() {
    const token = cookies().get('access_token')?.value ?? ''
    const userData: AccessTokenType | null = decodeJWTCookie(token)

    if (userData) {
      const effectiveData = {
        email: userData.email,
        first_name: userData.first_name,
        last_name: userData.last_name,
        token: token,
      }
      return effectiveData
    }

    return null
  }

  return {
    getUserData,
  }
}
