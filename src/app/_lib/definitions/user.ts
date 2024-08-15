import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().nullable(),
})

const UserUrologistVouchSchema = z.object({
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullable(),
  speciality_id: z.string(),
  image: z.string().nullable(),
  is_featured: z.boolean(),
  is_allowed_booking_appointment: z.boolean(),
  is_active: z.boolean(),
  first_name: z.string(),
  middle_name: z.string(),
  last_name: z.string(),
  slug: z.string(),
  suffix: z.string(),
  gender: z.string(),
  language: z.string(),
  credentials: z.array(z.number()),
  is_board_certified: z.boolean(),
  npi_id: z.string(),
  pac_id: z.string(),
  facebook_comments: z.string().nullable(),
  year_of_experience: z.number(),
})

const UserVouchDataSchema = z.object({
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  user_id: z.string(),
  urologist_id: z.string(),
  deleted_at: z.string().nullable(),
  urologist: UserUrologistVouchSchema,
})

export const UserDetailSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  email_verified_at: z.string().nullable(),
  is_active: z.number(),
  date_joined: z.string().nullable(),
  facebook_id: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
  vouches: z.array(UserVouchDataSchema),
})

export const UserDetailResponseSchema = z.object({
  data: UserDetailSchema,
})

export type User = z.infer<typeof UserSchema>
export type UserDetailResponse = z.infer<typeof UserDetailSchema>
