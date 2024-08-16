import { UrologistReviewData, UrologistReviewMeta, UrologistReviewResponse } from '@/app/_lib/definitions/urologist-review'
import { getUrologistReview } from '@/app/_lib/services/urologist/urologist-review'
import useUrologistReviewStore from '@/app/_lib/store/urologist-review'
import { useEffect, useState } from 'react'

type Props = {
  slug: string
}

export function useUrologistReview({ slug }: Props) {
  // Zustand store
  const { refreshKey } = useUrologistReviewStore()

  // Review data states
  const [reviewResponse, setReviewResponse] = useState<UrologistReviewResponse | null>(null)
  const [reviewList, setReviewList] = useState<UrologistReviewData[]>([])
  const [meta, setMeta] = useState<UrologistReviewMeta | null>(null)

  // Loading states
  const [loadingInitialState, setLoadingInitialState] = useState(true)
  const [loadingShowMore, setLoadingShowMore] = useState(false)

  async function showMoreReviews() {
    if (!meta?.next_cursor) return
    try {
      setLoadingShowMore(true)
      await getUrologistReview({ name: slug, cursor: meta?.next_cursor }).then((resp) => {
        setReviewList((prev) => [...prev, ...resp.data]) // Concatenate the data from resp
        setMeta(resp.meta)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingShowMore(false)
    }
  }

  async function getUrologistReviewData() {
    setLoadingInitialState(true)
    try {
      await getUrologistReview({ name: slug }).then((resp) => {
        setReviewResponse(resp)
        setReviewList(resp.data)
        setMeta(resp.meta)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingInitialState(false)
    }
  }

  useEffect(() => {
    getUrologistReviewData()
  }, [refreshKey])

  return {
    reviewResponse,
    reviewList,
    meta,
    loading: {
      initialState: loadingInitialState,
      showMore: loadingShowMore,
    },
    showMoreReviews,
  }
}
