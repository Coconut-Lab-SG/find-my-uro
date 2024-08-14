import { getUserData } from '@/app/_lib/helpers/UserHelpers'
import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'
import { UserInformation } from './components/UserInformation'

export default function Profile() {
  const userData = getUserData({ token: getCookie('access_token', { cookies }) as string })

  return (
    <div className="mobileL:min-w-[576px] max-w-[1140px] mx-auto px-5">
      <div className="w-full mb-5 mobileL:w-1/2 mobileL:mx-auto">
        <UserInformation data={userData ?? null} />
      </div>
    </div>
  )
}
