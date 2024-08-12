import { UrologistSearchResultsResponse } from '@/app/_lib/definitions/search-urologist'
import { objectToQueryString } from '@/app/_lib/helpers/StringHelpers'
import { getUrologistSearchResult } from '@/app/_lib/services/search/urologist-search-results'
import { SearchParamsProps } from '@/app/search/page'
import { useEffect, useState } from 'react'

export function useUrologistResultList(props: SearchParamsProps) {
  const [data, setData] = useState<UrologistSearchResultsResponse | null>(null)
  const [loading, setLoading] = useState(true) // loading at initial state while fetching data

  async function fetchUrologistResult() {
    // Delete type query params if any ('type' query is only intended for featured urologist/highest rated label)
    delete props.type
    const query = objectToQueryString(props)
    setLoading(true)
    try {
      await getUrologistSearchResult({ queryParams: query }).then((resp) => {
        setData(resp)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUrologistResult()
  }, [])

  return {
    urologistList: data?.data,
    loading,
  }
}
