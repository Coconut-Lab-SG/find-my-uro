import { z } from 'zod'
import { PaginationMetaSchema } from './pagination'

const LocationSchema = z.object({
  location: z.string(),
  state_id: z.number(),
  city_id: z.number(),
  longitude: z.number(),
  latitude: z.number(),
})

const UrologistSearchResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  suffix: z.string(),
  rate: z.number(),
  avatar: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  is_featured: z.boolean(),
  distance: z.number(),
  slug: z.string(),
})

export const LocationResponseSchema = z.object({
  data: z.array(LocationSchema),
  found: z.number(),
})

export const UrologistSearchResultsResponseSchema = z.object({
  data: z.array(UrologistSearchResultSchema),
  links: z.object({
    first: z.string().nullable(),
    last: z.string().nullable(),
    prev: z.string().nullable(),
    next: z.string().nullable(),
  }),
  meta: PaginationMetaSchema,
  total: z.number(),
  searched_location: z.string().nullable(),
  searched_city: z.object({
    id: z.number(),
    name: z.string(),
    state_id: z.number(),
    state_code: z.string(),
    state_name: z.string(),
    country_id: z.number(),
    country_code: z.string(),
    country_name: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    flag: z.boolean(),
    wikiDataId: z.string().nullable(),
    created_at: z.string(),
    updated_at: z.string(),
  }),
  searched_state: z.object({
    id: z.number(),
    name: z.string(),
    country_id: z.number(),
    country_code: z.string(),
    country_name: z.string(),
    state_code: z.string(),
    type: z.string(),
    latitude: z.string(), // update to number
    longitude: z.string(), // update to number
    flag: z.boolean(),
    wikiDataId: z.string().nullable(),
    created_at: z.string(),
    updated_at: z.string(),
  }),
})

export type LocationType = z.infer<typeof LocationSchema>
export type UrologistSearchResult = z.infer<typeof UrologistSearchResultSchema>
export type UrologistSearchResultsResponse = z.infer<typeof UrologistSearchResultsResponseSchema>
