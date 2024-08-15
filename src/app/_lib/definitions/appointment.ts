import { z } from 'zod'

export const AppointmentFormSchema = z.object({
  date: z.date({ required_error: 'Please provide a valid date' }),
  time: z.string().min(1, { message: 'Please provide a valid time' }),
  phone_number: z.string().min(1, { message: 'Please enter your phone number.' }),
  urologist_practice_id: z.string(),
})

export const CreateAppointmentResponseSchema = z.object({
  message: z.string(),
})

export type AppointmentFormType = {
  time: string
  phone_number: number
  urologist_practice_id: string
}
