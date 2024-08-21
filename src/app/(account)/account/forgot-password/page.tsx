import Link from 'next/link'
import { ForgotPasswordForm } from '../../components/forgot-password-form'

export default function ForgotPassword() {
  return (
    <div className="mobileL:min-w-[576px] max-w-[1140px] mx-auto px-5">
      <div className="w-full mb-5 mobileL:w-1/2 mobileL:mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-y-5">
            <span className="text-2xl italic font-medium">Forgot your Password?</span>
            <p className="text-lg leading-6">
              Enter your email that you used to register for Find My Uro. If there is an account with email, we will send you an email to reset the
              password.
            </p>
          </div>

          <ForgotPasswordForm />

          <div className="flex items-start">
            <Link href="/account/login">Back to Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
