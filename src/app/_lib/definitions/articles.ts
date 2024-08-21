import { z } from 'zod'
import { PaginationMetaSchema } from './pagination'

export const ArticleThumbnailSchema = z.object({
  title: z.string(),
  link: z.string(),
  category: z.string(),
  thumbnail: z.string(),
  description: z.string(),
})

export const ArticleListSchema = z.object({
  data: z.array(ArticleThumbnailSchema),
  links: z.object({
    first: z.string().nullable(),
    last: z.string().nullable(),
    prev: z.string().nullable(),
    next: z.string().nullable(),
  }),
  meta: PaginationMetaSchema,
})

export type ArticleThumbnailType = z.infer<typeof ArticleThumbnailSchema>
export type ArticleListResponse = z.infer<typeof ArticleListSchema>
