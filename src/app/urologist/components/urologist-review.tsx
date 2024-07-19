import { StarGenerator } from '@/app/_components/star-generator'
import { Button } from '@/app/_components/ui/button'

export function UrologistReview() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-lg italic font-medium text-center">Reviews here and beyond</span>

      <div className="flex flex-col gap-3">
        <span>Rating and Reviews</span>
        <StarGenerator count={5} />
        <span className="text-xs text-gray-400">71 ratings, 71 reviews</span>
      </div>

      {Array.from({ length: 5 }, (_, idx) => (
        <ReviewCard key={idx} />
      ))}

      <Button variant="ghost" className="text-[#432f91] w-fit p-0">
        Show More
      </Button>
    </div>
  )
}

// Composing component
function ReviewCard() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 bg-[#f2f2f2] rounded-xl p-4">
        <p className="text-sm line-clamp-2">
          Excellent! Dr Larish made me feel comfortable immediately. He spent the time to chat and get to understand my current life context before
          the examination. He diagnosed me immediately, debunked erroneous information from the referring doctor, was direct with me about the
          situation and level of urgency. He answered most of my questions without having to ask,. Most importantly, he was very clear on the plan of
          action.
        </p>
        <StarGenerator count={5} />
      </div>
      <p className="text-sm">
        <a href="https://www.zocdoc.com/doctor/yaniv-larish-md-176843" target="_blank">
          ZocDoc User
        </a>{' '}
        June 27, 2024
      </p>
    </div>
  )
}
