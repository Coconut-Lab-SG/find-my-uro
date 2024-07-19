'use client'

import { Button } from '@/app/_components/ui/button'
import { useUser } from '@/app/_lib/hooks/useUser'

export function UserInformation() {
  const { user } = useUser()

  return (
    <div className="flex flex-col gap-2">
      <h1>Profile page</h1>
      <div className="flex flex-col gap-3">
        <span>Hello, {`${user?.first_name} ${user?.last_name}`}</span>
        <Button variant="ghost" className="w-fit">
          Logout
        </Button>
      </div>
    </div>
  )
}
