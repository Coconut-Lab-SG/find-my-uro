import { StarGenerator } from '@/app/_components/star-generator'
import { UrologistReviewData, UrologistReviewResponse } from '@/app/_lib/definitions/urologist-review'
import { formatDate } from '@/app/_lib/helpers/DateTimeHelpers'

type UrologistReviewProps = {
  reviewData: UrologistReviewResponse
}

export function UrologistReview({ reviewData }: UrologistReviewProps) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-lg italic font-medium text-center">Reviews here and beyond</span>
      {reviewData.data.length > 0 ? (
        <>
          <div className="flex flex-col gap-3">
            <span>Rating and Reviews</span>
            <StarGenerator rating={reviewData.average_rating} />
            <span className="text-xs text-gray-400">
              {reviewData.number_of_rating} ratings, {reviewData.number_of_review} reviews
            </span>
          </div>
          {reviewData.data?.map((review) => (
            <ReviewCard key={review.id} data={review} />
          ))
          // TODO: adjust later for pagination
          // reviewData?.data.length > 5 && (
          //   <Button variant="ghost" className="text-[#432f91] w-fit p-0">
          //     Show More
          //   </Button>
          // )
          }
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
        <p className="text-sm line-clamp-2">{data.review}</p>
        <StarGenerator rating={data.rating} />
      </div>
      <p className="text-sm">
        <a href={data.link ?? ''} target="_blank">
          {data.user?.name || 'Unknown User'}
        </a>{' '}
        {formatDate(data.date)}
      </p>
    </div>
  )
}
