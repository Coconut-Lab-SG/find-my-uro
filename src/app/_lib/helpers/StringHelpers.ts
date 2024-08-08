import { SearchParamsProps } from '@/app/search/page'

export function objectToQueryString(obj: SearchParamsProps) {
  return Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}
