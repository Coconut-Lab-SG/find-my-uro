import Link from 'next/link'
import { FacebookAuth } from '../../components/facebook-auth'
import { LoginForm } from '../../components/login-form'

export default function Login() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-y-5">
        <span className="text-2xl italic font-medium">Sign In</span>
        <p className="text-lg leading-6">
          Find recommendations from people with similar treatments and more. <br />
          It’s easy, free and private.
        </p>
      </div>

      <div className="flex flex-col gap-y-5">
        <FacebookAuth />
        <div className="flex justify-center">
          <span className="text-lg">Or, Continue with email</span>
        </div>
      </div>

      {/* Email login form */}
      <LoginForm />

      <div className="flex items-center justify-center gap-4">
        <Link href="/account/register">Sign Up instead</Link>
        <span>|</span>
        <Link href="/account/forgot-password">Forgot Password</Link>
      </div>

      <p className="text-[#808080] text-center">
        By continuing, you agree to Find My Uro's{' '}
        <Link href="/terms-of-use" target="_blank">
          Terms
        </Link>{' '}
        and{' '}
        <Link href="privacy" target="_blank">
          Privacy Policy
        </Link>
      </p>
    </div>
  )
}