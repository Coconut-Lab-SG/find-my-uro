import { getUserData } from '@/app/_lib/helpers/UserHelpers'
import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'
import { TabMenu } from './components/TabMenu'
import { UserInformation } from './components/UserInformation'

export default function Profile() {
  const userData = getUserData({ token: getCookie('access_token', { cookies }) as string })

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-5">
        <div></div>
        <span className="text-2xl font-bold text-center">My Profile</span>
        <UserInformation data={userData ?? null} />
      </div>
      <TabMenu />
    </div>
  )
}
