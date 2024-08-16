import { z } from 'zod'
import { UserSchema } from './user'

const UrologistReviewDataSchema = z.object({
  id: z.string(),
  is_moderation_required: z.number(),
  author_email: z.string().nullable(),
  rating: z.number(),
  source: z.string().nullable(),
  review: z.string().nullable(),
  date: z.string(),
  link: z.string().nullable(),
  user: UserSchema.nullable(),
})

const UrologistReviewMetaSchema = z.object({
  path: z.string(),
  per_page: z.number(),
  next_cursor: z.string().nullable(),
  prev_cursor: z.string().nullable(),
})

export const UrologistReviewResponseSchema = z.object({
  data: z.array(UrologistReviewDataSchema),
  meta: UrologistReviewMetaSchema,
  average_rating: z.number(),
  number_of_review: z.number(),
  number_of_rating: z.number(),
})

export const UrologistReviewFormSchema = z.object({
  urologist_id: z.string(),
  rating: z.number(),
  review: z.string(),
  author_email: z.string(),
})

export type UrologistReviewData = z.infer<typeof UrologistReviewDataSchema>
export type UrologistReviewMeta = z.infer<typeof UrologistReviewMetaSchema>
export type UrologistReviewResponse = z.infer<typeof UrologistReviewResponseSchema>
export type RateUrologistType = z.infer<typeof UrologistReviewFormSchema>
