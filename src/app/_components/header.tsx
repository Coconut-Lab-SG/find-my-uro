'use client'

import { getCookie } from 'cookies-next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { DEFAULT_AVATAR_PATH } from '../_lib/constants/string-vars'
import { getUserData } from '../_lib/helpers/UserHelpers'

export default function Header() {
  const router = useRouter()
  const [userAvatar, setUserAvatar] = useState('')

  useEffect(() => {
    const token = getCookie('access_token') ?? ''
    const userData = getUserData({ token })
    if (userData) {
      setUserAvatar(userData.avatar)
    }
  }, [])

  return (
    <div style={{ background: 'linear-gradient(90.49deg, #243b6c 0.28%, #432f91 96.69%)' }}>
      <div className="flex items-center justify-between max-w-[1140px] mx-auto text-white py-3 w-full px-5">
        <div className="flex gap-x-2.5">
          <div className="text-2xl italic font-semibold text-white cursor-pointer hover:text-white" onClick={() => router.push('/')}>
            Find My Uro!
          </div>
          <span className="bg-[#f6a404] h-fit self-end mb-1.5 text-xs text-center px-1 text-[#432f91] italic font-bold rounded-sm">BETA</span>
        </div>
        <Link prefetch={false} href="/account/profile">
          <Image className="rounded-full" alt="user-avatar" src={userAvatar ? userAvatar : DEFAULT_AVATAR_PATH} width={40} height={40} />
        </Link>
      </div>
    </div>
  )
}
