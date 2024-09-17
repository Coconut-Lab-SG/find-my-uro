import { PaginationMetaType } from '@/app/_lib/definitions/pagination'
import { UrologistSearchResultsResponse } from '@/app/_lib/definitions/search-urologist'
import { objectToQueryString } from '@/app/_lib/helpers/StringHelpers'
import { getUrologistSearchResult } from '@/app/_lib/services/search/urologist-search-results'
import { SearchParamsProps } from '@/app/search/page'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useUrologistResultList(props: SearchParamsProps) {
  const currentSearchParams = useSearchParams()
  const [data, setData] = useState<UrologistSearchResultsResponse | null>(null)
  const [loading, setLoading] = useState(true) // loading at initial state while fetching data

  // Pagination state
  const [meta, setMeta] = useState<PaginationMetaType | null>(null)

  async function fetchUrologistResult() {
    const { title, ...restProps } = props // Destructure to exclude "title" without deleting it from query params
    const query = objectToQueryString(restProps) // Use the remaining properties to create the query string
    setLoading(true)
    try {
      await getUrologistSearchResult({ queryParams: query }).then((resp) => {
        setData(resp)
        setMeta(resp.meta)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUrologistResult()
  }, [currentSearchParams])

  return {
    urologistList: data?.data,
    meta,
    loading,
  }
}
