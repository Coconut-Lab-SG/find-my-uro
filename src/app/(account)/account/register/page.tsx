import Link from 'next/link'
import { FacebookAuth } from '../../components/facebook-auth'
import { RegisterForm } from '../../components/register-form'

export default function Register() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-y-5">
        <span className="text-2xl italic font-medium">Sign Up</span>
      </div>

      <div className="flex flex-col gap-y-5">
        <FacebookAuth />
        <div className="flex justify-center">
          <span className="text-lg">Or, Continue with email</span>
        </div>
      </div>

      {/* Register form */}
      <RegisterForm />

      <div className="flex items-center justify-center gap-4">
        <Link href="/account/login">Sign In instead</Link>
      </div>
    </div>
  )
}