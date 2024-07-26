import { Logout } from '@/app/_lib/services/authentication/logout'
import { getCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function useUserInformation() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function logoutUser() {
    setLoading(true)
    try {
      const currentToken = getCookie('access_token') as string
      await Logout({ token: currentToken }).then(() => {
        setCookie('access_token', null, {
          maxAge: 0,
        })

        router.push('/account/login')

        /* Sometimes the page is cached, even though we're already load it as a new page or redirected from other page.
          To mitigate this issue, we need to refresh the page when this function is called.
        */
        router.refresh()
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    logoutUser,
  }
}
