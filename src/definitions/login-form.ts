import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, { message: 'Please enter your email' }),
  password: z.string().min(1, { message: 'Please enter your password' })
})

export type LoginForm = z.infer<typeof loginSchema>
