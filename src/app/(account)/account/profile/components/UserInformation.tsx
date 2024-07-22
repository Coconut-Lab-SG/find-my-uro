'use client'

import { Button } from '@/app/_components/ui/button'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

type UserInformationProps = {
  data: {
    email: string
    first_name: string
    last_name: string
  } | null
}

export function UserInformation({ data }: UserInformationProps) {
  const router = useRouter()

  if (!data) {
    return <></>
  }

  function logoutUser() {
    setCookie('access_token', null, {
      maxAge: 0,
    })

    router.push('/account/login')

    /* Sometimes the page is cached, even though we're already load it as a new page or redirected from other page.
      To mitigate this issue, we need to refresh the page when this function is called.
    */
    router.refresh()
  }

  return (
    <div className="flex flex-col gap-2">
      <h1>Profile page</h1>
      <div className="flex flex-col gap-3">
        <span>Hello, {`${data.first_name} ${data.last_name}`}</span>
        <Button variant="ghost" className="w-fit" onClick={logoutUser}>
          Logout
        </Button>
      </div>
    </div>
  )
}
