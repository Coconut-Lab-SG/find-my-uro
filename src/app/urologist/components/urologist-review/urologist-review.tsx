'use client'

import { StarGenerator } from '@/app/_components/star-generator'
import { Button } from '@/app/_components/ui/button'
import { UrologistReviewData } from '@/app/_lib/definitions/urologist-review'
import { formatDate } from '@/app/_lib/helpers/DateTimeHelpers'
import { LoaderCircle } from 'lucide-react'
import { useUrologistReview } from './hooks/useUrologistReview'
import { UrologistReviewSkeleton } from './urologist-review-skeleton'

type UrologistReviewProps = {
  slug: string
}

export function UrologistReview({ slug }: UrologistReviewProps) {
  const { reviewResponse, reviewList, meta, loading, showMoreReviews } = useUrologistReview({ slug })

  if (loading.initialState) {
    return <UrologistReviewSkeleton />
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-lg italic font-medium text-center">Reviews here and beyond</span>
      {reviewList.length > 0 ? (
        <>
          <div className="flex flex-col gap-3">
            <span>Rating and Reviews</span>
            <StarGenerator rating={reviewResponse?.average_rating ?? 0} />
            <span className="text-xs text-gray-400">
              {reviewResponse?.number_of_rating} ratings, {reviewResponse?.number_of_review} reviews
            </span>
          </div>
          {reviewList.map((review) => (
            <ReviewCard key={review.id} data={review} />
          ))}

          {meta?.next_cursor && !loading.showMore && (
            <Button
              variant="ghost"
              className="text-blue-400 bg-transparent w-fit p-0 hover:bg-transparent hover:text-blue-500"
              onClick={showMoreReviews}
            >
              Show More
            </Button>
          )}

          {loading.showMore && (
            <div className="flex justify-center">
              <span>
                <LoaderCircle size={24} className="animate-spin text-blue-500" />
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-center p-4">
          <span className="text-lg">No reviews yet.</span>
        </div>
      )}
    </div>
  )
}

// Composing component
type ReviewCardProps = {
  data: UrologistReviewData
}

function ReviewCard({ data }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 bg-[#f2f2f2] rounded-xl p-4">
        <p className="text-sm">{data.review}</p>
        <StarGenerator rating={data.rating} />
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <span>
          {data.user?.name || 'Unknown User'} on {formatDate(data.date)}
        </span>
      </div>
    </div>
  )
}
