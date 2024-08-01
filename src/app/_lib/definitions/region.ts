import { z } from 'zod'

export const CitySchema = z.object({
  id: z.number(),
  country_id: z.number(),
  state_id: z.number(),
  name: z.string(),
  state_code: z.string(),
  state_name: z.string(),
  country_code: z.string(),
  country_name: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  flag: z.boolean(),
  wikiDataId: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})
