import { loginSchema } from '@/app/_lib/definitions/authentication-form'
import { Login } from '@/app/_lib/services/authentication/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function useLoginForm() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    isError: false,
    message: '',
  })

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
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

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const referrer = searchParams.get('referrer')
    setLoading(true)
    setError({ ...error, isError: false })

    try {
      await Login({ body: values }).then((data) => {
        const token = data.access_token

        // Set user session by cookie
        setCookie('access_token', token, {
          maxAge: data.expires_in,
        })

        if (referrer) {
          // Redirect to previous accessed link that provided from referrer query param
          router.push(referrer)
        } else {
          // Redirect to profile page
          router.push('/account/profile')
        }

        router.refresh()
      })
    } catch (error: any) {
      console.error(error)
      const statusCode = error.code
      if (statusCode === 401) {
        setError({
          isError: true,
          message: error.message,
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    form,
    error,
    loading,
    onSubmit,
  }
}
