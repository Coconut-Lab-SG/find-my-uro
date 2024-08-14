import { z } from 'zod'
import { CitySchema } from './region'

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
  urologist_id: z.string(),
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
  phone_number: z.string(),
  fax_number: z.string().nullable(),
  email: z.string().nullable(),
  alternative_email: z.string().nullable(),
  website: z.string().nullable(),
  description: z.string().nullable(),
  city: CitySchema,
  hours: z.array(PracticeHourSchema),
})

const UrologistInsuranceTypeSchema = z.object({
  id: z.string(),
  insurance_name: z.string(),
  insurance_code: z.string().nullable(),
  plan_name: z.string(),
  plan_code: z.string().nullable(),
  plan_type: z.string(),
})

const UrologistTypeSchema = z.object({
  id: z.string(),
  avatar: z.string().nullable(),
  is_featured: z.boolean(),
  is_allowed_booking_appointment: z.boolean(),
  name: z.string(),
  suffix: z.string(),
  gender: z.string(),
  language: z.string(),
  credentials: z.string(),
  board_certified: z.string(),
  npi_id: z.string(),
  pac_id: z.string(),
  year_of_experience: z.number(),
  rate: z.number(),
  latitude: z.number(),
  longitude: z.number(),
  speciality: z.string(),
  educations: z.array(UrologistEducationTypeSchema),
  practice: UrologistPracticeTypeSchema,
  amthAffiliations: z.array(AmthAffiliationTypeSchema),
  insurances: z.array(UrologistInsuranceTypeSchema),
})

export const UrologistResponseSchema = z.object({
  data: UrologistTypeSchema,
  vouches_count: z.number(),
})

export type UrologistResponse = z.infer<typeof UrologistResponseSchema>
export type UrologistType = z.infer<typeof UrologistTypeSchema>
