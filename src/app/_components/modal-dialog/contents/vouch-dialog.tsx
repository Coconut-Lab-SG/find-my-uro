import { UrologistType } from '@/app/_lib/definitions/urologist'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type VouchDialogProps = {
  data: UrologistType
}

export function VouchDialog({ data }: VouchDialogProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-5 justify-center items-center border-b border-gray-300 pb-10 px-6 text-center">
        <div className="flex items-center gap-2 p-4">
          <Image alt="urologist-img" src={data.avatar} width={87} height={95} className="rounded-full" />
          <div
            className="flex justify-center items-center rounded-full text-white w-[50px] h-[50px]"
            style={{ background: 'linear-gradient(96.65deg, #b20000 0%, #ff7c52 95.82%)' }}
          >
            <Heart size={20} />
          </div>
        </div>
        <span className="text-base">To vouch for {data.name}, you will need to sign in</span>
        <Link prefetch={false} href="/login">
          Continue with Email
        </Link>
      </div>

      <div className="flex justify-center text-center p-3">
        <p className="text-[#808080] text-sm">
          By continuing, you agree to Find My Uro's{' '}
          <Link href="/terms-of-use" target="_blank">
            Terms
          </Link>{' '}
          and{' '}
          <Link href="/privacy" target="_blank">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
