import { StarIcon } from '@/app/_components/icons'
import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { Textarea } from '@/app/_components/ui/textarea'
import Image from 'next/image'
import { useState } from 'react'

export function ReviewDialog() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className="flex flex-col w-full py-5">
      <div className="flex flex-col gap-4 px-6">
        <div className="flex items-center justify-center">
          <Image alt="urologist-img" src="/assets/images/urologist/dummy-urologist-img.png" width={87} height={95} className="rounded-full" />
          <span className="text-xl text-[#303f9f]">Yaniv Larish, M.D</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold">Select your rating</span>
          <StarRating rating={rating} hover={hover} setRating={setRating} setHover={setHover} />
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-lg font-semibold">Share your experience</span>
          <Textarea placeholder="How was your visit with the doctor? Help other patients find the right doctor by leaving a review." rows={5} />
          <Input placeholder="Email address*" className="h-12" />
        </div>
      </div>

      <div className="flex justify-center text-center p-3">
        <p className="text-[#808080] text-sm">
          By clicking the "Submit Review" button, you agree to Find My Uro's{' '}
          <a href="" target="_blank">
            Terms
          </a>
          ,{' '}
          <a href="" target="_blank">
            Privacy Policy
          </a>
          , and{' '}
          <a href="" target="_blank">
            Review Guideline
          </a>
        </p>
      </div>

      <div className="px-6">
        <Button variant="ghost" className="bg-[#f6a404] w-full text-xl text-white h-11">
          Submit Review
        </Button>
      </div>
    </div>
  )
}

// Composing component
type StarRatingProps = {
  rating: number
  hover: number
  setRating: (val: number) => void
  setHover: (val: number) => void
}

function StarRating({ rating, hover, setRating, setHover }: StarRatingProps) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1

        return (
          <div key={index} onClick={() => setRating(ratingValue)} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(rating)}>
            <StarIcon size={24} fill={ratingValue <= (hover || rating) ? '#ffbc0b' : '#c4c4c4'} shape="full" />
          </div>
        )
      })}
    </div>
  )
}
