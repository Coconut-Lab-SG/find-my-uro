import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import Link from 'next/link'

export default function ForgotPassword() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-y-5">
        <span className="text-2xl italic font-medium">Forgot your Password?</span>
        <p className="text-lg leading-6">
          Enter your email that you used to register for Find My Uro. If there is an account with email, we will send you an email to reset the
          password.
        </p>
      </div>

      <div className="flex flex-col gap-y-5">
        <Input placeholder="Email address" className="h-[50px] border-[#ced4da]" />
        <Button type="submit" className="w-full h-[50px] bg-[#f6a404] text-white rounded-lg text-xl hover:bg-[#f6a404]">
          Send Email
        </Button>
      </div>

      <div className="flex items-start">
        <Link href="/account/login">Back to Sign In</Link>
      </div>
    </div>
  )
}
