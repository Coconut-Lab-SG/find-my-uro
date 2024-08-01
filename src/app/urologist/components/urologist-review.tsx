import { StarGenerator } from '@/app/_components/star-generator'
import { Button } from '@/app/_components/ui/button'
import { UrologistReviewType } from '@/app/_lib/definitions/urologist'
import { formatDate } from '@/app/_lib/helpers/DateTimeHelpers'

type UrologistReviewProps = {
  data: UrologistReviewType[]
}

export function UrologistReview({ data }: UrologistReviewProps) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-lg italic font-medium text-center">Reviews here and beyond</span>

      <div className="flex flex-col gap-3">
        <span>Rating and Reviews</span>
        <StarGenerator rating={5} />
        <span className="text-xs text-gray-400">71 ratings, 71 reviews</span>
      </div>
      {data.map((review) => (
        <ReviewCard key={review.id} data={review} />
      ))}

      {data.length > 5 && (
        <Button variant="ghost" className="text-[#432f91] w-fit p-0">
          Show More
        </Button>
      )}
    </div>
  )
}

// Composing component
type ReviewCardProps = {
  data: UrologistReviewType
}

function ReviewCard({ data }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 bg-[#f2f2f2] rounded-xl p-4">
        <p className="text-sm line-clamp-2">{data.review}</p>
        <StarGenerator rating={5} />
      </div>
      <p className="text-sm">
        <a href="https://www.zocdoc.com/doctor/yaniv-larish-md-176843" target="_blank">
          {data.author || 'Unknown User'}
        </a>{' '}
        {formatDate(data.date)}
      </p>
    </div>
  )
}
