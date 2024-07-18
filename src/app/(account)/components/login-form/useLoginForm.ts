import { loginSchema } from '@/definitions/authentication-form'
import { Login } from '@/services/authentication/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function useLoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    isError: false,
    message: ''
  })


  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true)
    setError({ ...error, isError: false })
    try {
      await Login({ body: values })
    } catch (error: any) {
      console.error(error)
      const statusCode = error.code
      if (statusCode === 401) {
        setError({
          isError: true,
          message: error.message
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
