import { z } from 'zod'

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
  meta: z.object({
    current_page: z.number(),
    from: z.number(),
    last_page: z.number(),
    path: z.string().nullable(),
    per_page: z.number(),
    to: z.number(),
    total: z.number(),
  }),
})

export type ArticleThumbnailType = z.infer<typeof ArticleThumbnailSchema>
export type ArticleListResponse = z.infer<typeof ArticleListSchema>
