import { z } from 'zod'
import { CitySchema } from './region'

const UrologistReviewTypeSchema = z.object({
  id: z.string(),
  rating: z.number(),
  date: z.string(),
  link: z.string(),
  source: z.string(),
  review: z.string(),
  author: z.string(),
})

const AmthAffiliationTypeSchema = z.object({
  name: z.string(),
})

const PracticeHourSchema = z.object({
  id: z.string(),
  day: z.string(),
  is_practice: z.number(),
  practice_start: z.string(),
  practice_end: z.string(),
})

const UrologistEducationTypeSchema = z.object({
  id: z.string(),
  type: z.string(),
  institution: z.string(),
  graduation_year: z.number().nullable(),
})

const UrologistPracticeTypeSchema = z.object({
  id: z.string(),
  type: z.string().nullable(),
  is_accepting_new_patients: z.number(),
  is_primary_practice: z.number(),
  practice_name: z.string().nullable(),
  address: z.string(),
  map_url: z.string(),
  longitude: z.number(),
  latitude: z.number(),
  zip_code: z.string(),
  city: CitySchema,
  phone_number: z.string(),
  fax_number: z.string().nullable(),
  hours: z.array(PracticeHourSchema),
  email: z.string().nullable(),
  alternative_email: z.string().nullable(),
  website: z.string().nullable(),
  description: z.string().nullable(),
})

const UrologistTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  suffix: z.string(),
  rate: z.number(),
  avatar: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  board_certified: z.string(),
  language: z.string(),
  npi_id: z.string(),
  pac_id: z.string(),
  year_of_experience: z.number(),
  is_allowed_booking_appointment: z.boolean(),
  speciality: z.string(),
  educations: z.array(UrologistEducationTypeSchema),
  practice: UrologistPracticeTypeSchema,
  amthAffiliations: z.array(AmthAffiliationTypeSchema),
  reviews: z.array(UrologistReviewTypeSchema),
})

export const UrologistResponseSchema = z.object({
  data: UrologistTypeSchema,
})

export type UrologistResponse = z.infer<typeof UrologistResponseSchema>
export type UrologistType = z.infer<typeof UrologistTypeSchema>
export type UrologistReviewType = z.infer<typeof UrologistReviewTypeSchema>
