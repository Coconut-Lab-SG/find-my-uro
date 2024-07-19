import { useEffect, useState } from 'react'
import { decodeJWTCookie } from '../helpers/SessionHelpers'
import { AccessTokenType } from '../types/authentication'
import { UserType } from '../types/user'

export function useUser() {
  const [user, setUser] = useState<UserType | null>(null)

  function getUserData() {
    const userToken: AccessTokenType | null = decodeJWTCookie()

    if (userToken) {
      setUser({
        email: userToken.email,
        first_name: userToken.first_name,
        last_name: userToken.last_name,
      })
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return {
    user,
  }
}
