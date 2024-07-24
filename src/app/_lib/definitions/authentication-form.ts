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
  password_confirm: z.string().min(1, { message: 'Please confirm your password' }),
})

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, { message: 'Please enter your email' }),
})

export const appointmentSchema = z.object({
  name: z.string().min(1, { message: 'Please provide a name' }),
  phone_number: z.string().min(1, { message: 'Please provide a phone number' }),
  urologist_name: z.string(),
  time: z.date({ required_error: 'Please provide a valid date' }),
  email_id: z.string().min(1, { message: 'Please provide a valid email ID' }),
})

export type LoginForm = z.infer<typeof loginSchema>
export type RegisterForm = z.infer<typeof registerSchema>
export type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>
export type AppointmentForm = z.infer<typeof appointmentSchema>
