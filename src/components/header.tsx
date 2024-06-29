'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  return (
    <div style={{ background: 'linear-gradient(90.49deg, #243b6c 0.28%, #432f91 96.69%)' }}>
      <div className="flex items-center justify-between max-w-[1140px] mx-auto text-white py-3 w-full px-5 cursor-pointer">
        <div className="flex gap-x-2.5">
          <div className="text-2xl italic font-semibold text-white hover:text-white" onClick={() => router.push('/')}>
            Find My Uro!
          </div>
          <span className="bg-[#f6a404] h-fit self-end mb-1.5 text-xs text-center px-1 text-[#432f91] italic font-bold rounded-sm">BETA</span>
        </div>
        <Link href="/account/login">
          <Image className="rounded-full" alt="user-avatar" src="/assets/icons/user-avatar.webp" width={40} height={40} />
        </Link>
      </div>
    </div>
  )
}
