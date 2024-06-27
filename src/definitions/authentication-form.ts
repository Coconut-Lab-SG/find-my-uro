import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, { message: 'Please enter your email' }),
  password: z.string().min(1, { message: 'Please enter your password' }),
})

export const registerSchema = z.object({
  email: z.string().min(1, { message: 'Please enter your email' }),
  first_name: z.string().min(1, { message: 'Please enter first name' }),
  last_name: z.string().min(1, { message: 'Please enter last name' }),
  password: z.string().min(1, { message: 'Please enter your password' }),
  confirm_password: z.string().min(1, { message: 'Please confirm your password' }),
})

export type LoginForm = z.infer<typeof loginSchema>
export type RegisterForm = z.infer<typeof registerSchema>
