import { UrologistReviewFormSchema } from '@/app/_lib/definitions/urologist-review'
import { urologistRatePost } from '@/app/_lib/services/urologist/urologist-rate-post'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
  urologist_id: string
}

export function useReviewDialog({ urologist_id }: Props) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [disableBtn, setDisableBtn] = useState(true)
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof UrologistReviewFormSchema>>({
    resolver: zodResolver(UrologistReviewFormSchema),
    defaultValues: {
      urologist_id: urologist_id,
      rating: 0,
      review: '',
      author_email: '',
    },
  })

  async function submitReview(data: z.infer<typeof UrologistReviewFormSchema>) {
    setLoading(true)
    console.log(data)
    try {
      // TODO: Post to API right here
      await urologistRatePost({ body: data }).then(() => {
        // Do logic here
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const { watch } = form

  useEffect(() => {
    const subscription = watch(() => {
      // Watch each form field
      const ratingField = watch('rating')
      const reviewField = watch('review')
      const emailField = watch('author_email')

      if (ratingField >= 1 && reviewField && emailField) {
        setDisableBtn(false)
      } else {
        setDisableBtn(true)
      }
    })

    return () => subscription.unsubscribe()
  }, [watch])

  return {
    rating,
    hover,
    form,
    disableBtn,
    setRating,
    setHover,
    submitReview,
  }
}
