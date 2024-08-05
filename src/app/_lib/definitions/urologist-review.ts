import { z } from 'zod'
import { UserSchema } from './user'

const UrologistReviewDataSchema = z.object({
  id: z.string(),
  is_moderation_required: z.number(),
  author_email: z.string(),
  rating: z.number(),
  source: z.string(),
  review: z.string(),
  date: z.string(),
  link: z.string(),
  user: UserSchema.nullable(),
})

export const UrologistReviewTypeSchema = z.object({
  data: z.array(UrologistReviewDataSchema),
  // TODO: Might need to add this later
  // links: z.object({
  //   first: null,
  //   last: null,
  //   prev: null,
  //   next: null
  // }),
  // meta: z.object({
  //   path: z.string(),
  //   per_page: z.number(),
  //   next_cursor: z,
  //   prev_cursor: null
  // }),
  average_rating: z.number(),
  number_of_review: z.number(),
  number_of_rating: z.number(),
})

export type UrologistReviewData = z.infer<typeof UrologistReviewDataSchema>
export type UrologistReviewResponse = z.infer<typeof UrologistReviewTypeSchema>