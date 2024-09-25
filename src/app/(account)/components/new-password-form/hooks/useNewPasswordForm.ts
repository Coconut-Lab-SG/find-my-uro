import { newPasswordSchema } from '@/app/_lib/definitions/authentication-form'
import { NewPassword } from '@/app/_lib/services/authentication/new-password'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
  userToken: string
}

export function useNewPasswordForm({ userToken }: Props) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    isError: false,
    message: '',
  })
  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
      password_confirm: '',
    },
  })

  const { watch } = form

  useEffect(() => {
    const subscription = watch(() => {
      // Remove error message if a particular field is changed
      if (error.isError) {
        setError({ isError: false, message: '' })
      }
    })

    return () => subscription.unsubscribe()
  }, [watch, error.isError])

  async function onSubmit(values: z.infer<typeof newPasswordSchema>) {
    const password = watch('password')
    const passwordConfirm = watch('password_confirm')

    // Validate password confirmation
    if (password !== passwordConfirm) {
      return setError({
        isError: true,
        message: 'The password confirmation does not match.',
      })
    }

    setLoading(true)
    try {
      const body = {
        password: values.password,
        password_confirm: values.password_confirm,
        token: userToken,
      }

      await NewPassword(body).then(() => {
        // Redirect to login page
        router.push('/account/login')
        router.refresh()
      })
    } catch (error: any) {
      console.error(error)
      const statusCode = error.code
      if (statusCode === 422) {
        setError({
          isError: true,
          message: error.errors.email[0],
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    form,
    error,
    onSubmit,
  }
}
