'use client'

import { Button } from '@/app/_components/ui/button'
import { VerifyEmail } from '@/app/_lib/services/authentication/verify-email'
import { LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EmailVerification() {
  const searchParams = useSearchParams()
  const verification_url = searchParams.get('url')
  const verification_token = verification_url?.split('/').pop()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function verifyEmail() {
    if (verification_token) {
      setLoading(true)
      try {
        await VerifyEmail({ verification_token: verification_token })
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    verifyEmail()
  }, [])

  // Loading state
  if (loading) {
    return (
      <div className="size-full mb-5 mobileL:w-1/2 mobileL:mx-auto">
        <div className="flex gap-2 items-center justify-center h-full">
          <span className="animate-spin">
            <LoaderCircle size={24} />
          </span>
          <span className="text-2xl font-bold">Verifying email...</span>
        </div>
      </div>
    )
  }

  // Verify email failed, display error state
  if (error) {
    return (
      <div className="size-full mb-5 mobileL:w-1/2 mobileL:mx-auto">
        <div className="flex justify-center items-center h-full">
          <span className="text-2xl font-bold">Email verification has expired.</span>
        </div>
      </div>
    )
  }

  return (
    <div className="mobileL:min-w-[576px] max-w-[1140px] mx-auto px-5 h-full">
      <div className="size-full mb-5 mobileL:w-1/2 mobileL:mx-auto">
        <div className="flex flex-col items-center gap-6 h-full justify-center">
          <span className="text-2xl font-bold">Email Verification success!</span>
          <Link prefetch={false} href="/">
            <Button variant="ghost" className="text-lg px-4 py-3 bg-red-500 text-white rounded-full w-fit hover:bg-red-600 hover:text-white">
              Back To Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
