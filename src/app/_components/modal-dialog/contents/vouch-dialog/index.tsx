import { Button } from '@/app/_components/ui/button'
import { DEFAULT_AVATAR_PATH } from '@/app/_lib/constants/string-vars'
import { UrologistType } from '@/app/_lib/definitions/urologist'
import { Heart, LoaderCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useVouchDialog } from './hooks/useVouchDialog'

type VouchDialogProps = {
  data: UrologistType
  slug: string
  isUserAlreadyVouched: boolean
  closeVouchDialog: () => void
}

export function VouchDialog({ data, slug, isUserAlreadyVouched, closeVouchDialog }: VouchDialogProps) {
  const { isUserAuthenticated, loading, submitVouch } = useVouchDialog({
    urologist_id: data.id,
    urologist_name: data.name,
    closeVouchDialog,
    isUserAlreadyVouched,
  })

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-5 justify-center items-center border-b border-gray-300 pb-10 px-6 text-center">
        <div className="flex items-center gap-2 p-4">
          <Image alt="urologist-img" src={data.avatar ?? DEFAULT_AVATAR_PATH} width={87} height={95} className="rounded-full" />
          <div
            className="flex justify-center items-center rounded-full text-white w-[50px] h-[50px]"
            style={{ background: 'linear-gradient(96.65deg, #b20000 0%, #ff7c52 95.82%)' }}
          >
            <Heart size={20} />
          </div>
        </div>

        {!isUserAuthenticated && (
          <div className="flex flex-col gap-2">
            <span className="text-base">To vouch for {data.name}, you will need to sign in</span>
            <Link prefetch={false} href={`/account/login?referrer=/urologist/${slug}`}>
              Continue with Email
            </Link>
          </div>
        )}

        {isUserAuthenticated &&
          (!isUserAlreadyVouched ? (
            <div className="flex flex-col gap-2">
              <span>
                Are you sure you want to vouch <strong className="capitalize">{data.name}</strong>?
              </span>
              <div className="flex items-center justify-center gap-3">
                <Button
                  variant="ghost"
                  disabled={loading}
                  className="flex items-center gap-2 p-2 rounded-md bg-sky-500 text-white hover:bg-sky-700 hover:text-white"
                  onClick={submitVouch}
                >
                  {loading && <LoaderCircle size={20} className="animate-spin" />}
                  Vouch
                </Button>
                <Button variant="ghost" className="p-2 rounded-md bg-red-400 text-white hover:bg-red-500 hover:text-white" onClick={closeVouchDialog}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <span>
                Are you sure you want to un-vouch <strong className="capitalize">{data.name}</strong>?
              </span>
              <div className="flex items-center justify-center gap-3">
                <Button
                  variant="ghost"
                  disabled={loading}
                  className="flex items-center gap-2 p-2 rounded-md bg-sky-500 text-white hover:bg-sky-700 hover:text-white"
                  onClick={submitVouch}
                >
                  {loading && <LoaderCircle size={20} className="animate-spin" />}
                  Unvouch
                </Button>
                <Button variant="ghost" className="p-2 rounded-md bg-red-400 text-white hover:bg-red-500 hover:text-white" onClick={closeVouchDialog}>
                  Cancel
                </Button>
              </div>
            </div>
          ))}
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
