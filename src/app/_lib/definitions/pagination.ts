import { z } from 'zod'

export const MetaLinkSchema = z.object({
  active: z.boolean(),
  label: z.string(),
  query: z.string().nullable(),
  url: z.string().nullable(),
})

export const PaginationMetaSchema = z.object({
  current_page: z.number(),
  from: z.number(),
  last_page: z.number(),
  links: z.array(MetaLinkSchema),
  path: z.string(),
  per_page: z.number(),
  to: z.number(),
  total: z.number(),
})

export type PaginationMetaType = z.infer<typeof PaginationMetaSchema>
