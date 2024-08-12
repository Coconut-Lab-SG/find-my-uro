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

export const MostSeachedCitiesSchema = z.object({
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
  wikiDataId: z.string().nullable(),
  searches_count: z.number(),
})

export const MostSeachedCitiesResponseSchema = z.object({
  data: z.array(MostSeachedCitiesSchema),
})

export type MostSearchedCitiesResponse = z.infer<typeof MostSeachedCitiesResponseSchema>
export type MostSearchedCityType = z.infer<typeof MostSeachedCitiesSchema>
