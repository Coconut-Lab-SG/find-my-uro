import { useToast } from '@/app/_components/ui/use-toast'
import { UrologistReviewFormSchema } from '@/app/_lib/definitions/urologist-review'
import { getUserData } from '@/app/_lib/helpers/UserHelpers'
import { urologistRatePost } from '@/app/_lib/services/urologist/urologist-rate-post'
import useUrologistReviewStore from '@/app/_lib/store/urologist-review'
import { zodResolver } from '@hookform/resolvers/zod'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
  urologist_id: string
  closeReviewDialog: () => void
}

export function useReviewDialog({ urologist_id, closeReviewDialog }: Props) {
  const { increaseRefreshKey } = useUrologistReviewStore()
  const { toast } = useToast()

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [disableBtn, setDisableBtn] = useState(true)
  const [loading, setLoading] = useState(false)

  // User data
  const userToken = getCookie('access_token') ?? ''
  const userData = getUserData({ token: userToken })

  const form = useForm<z.infer<typeof UrologistReviewFormSchema>>({
    resolver: zodResolver(UrologistReviewFormSchema),
    defaultValues: {
      urologist_id: urologist_id,
      rating: 0,
      review: '',
      author_email: userData?.email ?? '',
    },
  })

  async function submitReview(data: z.infer<typeof UrologistReviewFormSchema>) {
    setLoading(true)
    try {
      await urologistRatePost({ body: data, token: userToken }).then(() => {
        increaseRefreshKey()
        toast({
          description: 'Review urologist success!',
        })
        closeReviewDialog()
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
    userData: userData,
    rating,
    hover,
    form,
    disableBtn,
    loading,
    setRating,
    setHover,
    submitReview,
  }
}
