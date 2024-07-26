import { NewPasswordForm } from '@/app/(account)/components/new-password-form'

type NewPasswordServerProps = {
  params: {
    slug: string
  }
}

export default function NewPassword({ params }: NewPasswordServerProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-2xl italic font-medium">Reset Password</span>
        <span className="text-lg leading-6">Enter your new password.</span>
      </div>

      <NewPasswordForm userToken={params.slug} />
    </div>
  )
}
