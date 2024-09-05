import { registerSchema } from '@/app/_lib/definitions/authentication-form'
import { sendAnalyticEvent } from '@/app/_lib/helpers/GoogleAnalyticsHelpers'
import { Register } from '@/app/_lib/services/authentication/register'
import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function useRegisterForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    isError: false,
    message: '',
  })
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      first_name: '',
      last_name: '',
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

  async function onSubmit(values: z.infer<typeof registerSchema>) {
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
      await Register(values).then((data) => {
        const token = data.access_token

        // Set user session by cookie
        setCookie('access_token', token, {
          maxAge: data.expires_in,
        })
        sendAnalyticEvent({ event_category: 'register', event_value: { type: 'email' } })

        // Redirect to profile page
        router.push('/account/profile')
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
