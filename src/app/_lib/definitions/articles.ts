import { z } from 'zod'

export const ArticleThumbnailSchema = z.object({
  title: z.string(),
  link: z.string(),
  category: z.string(),
  thumbnail: z.string(),
  description: z.string(),
})

export type ArticleThumbnailType = z.infer<typeof ArticleThumbnailSchema>
