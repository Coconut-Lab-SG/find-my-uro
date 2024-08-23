import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'
import { PaginationMetaSchema } from './pagination'

export const AppointmentFormSchema = z.object({
  date: z.date({ required_error: 'Please provide a valid date' }),
  time: z.string().min(1, { message: 'Please provide a valid time' }),
  phone_number: z.string().refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
  urologist_practice_id: z.string(),
})

export const CreateAppointmentResponseSchema = z.object({
  message: z.string(),
})

export const AppointmentSchema = z.object({
  id: z.string(),
  urologist_slug: z.string(),
  urologist_name: z.string(),
  appointment_code: z.string(),
  appointment_address: z.string(),
  appointment_time: z.string(),
})

export const AppointmentListResponse = z.object({
  data: z.array(AppointmentSchema),
  links: z.object({
    first: z.string().nullable(),
    last: z.string().nullable(),
    prev: z.string().nullable(),
    next: z.string().nullable(),
  }),
  meta: PaginationMetaSchema,
})

export type AppointmentFormType = {
  time: string
  phone_number: number
  urologist_practice_id: string
}

export type AppointmentType = z.infer<typeof AppointmentSchema>
export type AppointmentListType = z.infer<typeof AppointmentListResponse>
