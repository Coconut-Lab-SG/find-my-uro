import { z } from 'zod'
import { ArticleThumbnailSchema } from './articles'

const FeaturedUrologistSchema = z.object({
  id: z.string(),
  name: z.string(),
  suffix: z.string(),
  rate: z.number(),
  avatar: z.string(),
  longitude: z.number(),
  latitude: z.number(),
  slug: z.string(),
  is_featured: z.boolean(),
  distance: z.number(),
})

export const LandingPageDatasetSchema = z.object({
  featured: z.array(FeaturedUrologistSchema),
  highest_rated: z.array(FeaturedUrologistSchema),
  articles: z.array(ArticleThumbnailSchema),
})

// Note: Featured and highest rated urologist use the similar schema
export type FeaturedUrologistType = z.infer<typeof FeaturedUrologistSchema>
export type HighestRatedUrologistType = z.infer<typeof FeaturedUrologistSchema>

export type LandingPageDatasetResponse = z.infer<typeof LandingPageDatasetSchema>
