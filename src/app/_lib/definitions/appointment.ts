import { z } from 'zod'

const AppointmentFormSchema = z.object({
  time: z.string(), // Example: 2024-09-10 09:30
  phone_number: z.number(),
  urologist_practice_id: z.string(),
})

export const CreateAppointmentResponseSchema = z.object({
  message: z.string(),
})

export type AppointmentFormType = z.infer<typeof AppointmentFormSchema>
