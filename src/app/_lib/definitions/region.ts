import { z } from 'zod'

export const CitySchema = z.object({
  id: z.number(),
  country_id: z.number(),
  state_id: z.number(),
  name: z.string(),
  location: z.string().nullable(),
  state_code: z.string(),
  state_name: z.string(),
  country_code: z.string(),
  country_name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  wikiDataId: z.string(),
  searches_count: z.number().nullable(),
})

const MostSeachedCitiesSchema = z.object({
  id: z.number(),
  country_id: z.number(),
  state_id: z.number(),
  name: z.string(),
  location: z.string(),
  state_code: z.string(),
  state_name: z.string(),
  country_code: z.string(),
  country_name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  wikiDataId: z.string(),
  searches_count: z.number(),
})

const MostSeachedCitiesResponseSchema = z.object({
  data: z.array(MostSeachedCitiesSchema),
})

export type MostSearchedCitiesResponse = z.infer<typeof MostSeachedCitiesResponseSchema>
