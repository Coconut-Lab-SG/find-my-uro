import { forgotPasswordSchema } from '@/app/_lib/definitions/authentication-form'
import { ResetPassword } from '@/app/_lib/services/authentication/reset-password'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function useForgotPasswordForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    isError: false,
    message: '',
  })
  const [success, setSuccess] = useState(false)

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(value: z.infer<typeof forgotPasswordSchema>) {
    setLoading(true)
    setError({ ...error, isError: false })
    try {
      await ResetPassword(value).then(() => {
        setSuccess(true)
      })
    } catch (error: any) {
      console.error(error)
      const statusCode = error.code
      if (statusCode === 400) {
        // Email not found error
        return setError({
          isError: true,
          message: error.message,
        })
      }

      // Input validation error
      setError({
        isError: true,
        message: error.errors.email[0],
      })
    } finally {
      setLoading(false)
    }
  }

  return {
    form,
    error,
    loading,
    success,
    onSubmit,
  }
}
