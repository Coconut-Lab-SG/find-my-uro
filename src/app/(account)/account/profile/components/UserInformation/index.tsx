'use client'

import { Button } from '@/app/_components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { useUserInformation } from './hooks/useUserInformation'

type UserInformationProps = {
  data: {
    email: string
    first_name: string
    last_name: string
  } | null
}

export function UserInformation({ data }: UserInformationProps) {
  const { loading, logoutUser } = useUserInformation()

  if (!data) {
    return <></>
  }

  return (
    <div className="flex flex-col gap-2">
      <h1>Profile page</h1>
      <div className="flex flex-col gap-3">
        <span>Hello, {`${data.first_name} ${data.last_name}`}</span>
        <Button variant="ghost" className="flex items-center gap-2 w-fit bg-red-400 hover:bg-red-400" onClick={logoutUser} disabled={loading}>
          {loading && <LoaderCircle size={20} className="animate-spin" />}
          Log Out
        </Button>
      </div>
    </div>
  )
}