import { registerSchema } from '@/app/_lib/definitions/authentication-form'
import { Register } from '@/app/_lib/services/authentication/register'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function useRegisterForm() {
  const [loading, setLoading] = useState(false)
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

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setLoading(true)
    try {
      await Register(values).then((data) => {
        // Request success
        console.log(data)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    form,
    onSubmit,
  }
}
