import { z } from 'zod'

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
})

export type FeaturedUrologistType = z.infer<typeof FeaturedUrologistSchema>
export type LandingPageDatasetResponse = z.infer<typeof LandingPageDatasetSchema>
