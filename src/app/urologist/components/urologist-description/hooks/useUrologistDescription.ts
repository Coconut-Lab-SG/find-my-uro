import { useToast } from '@/app/_components/ui/use-toast'
import { UrologistType } from '@/app/_lib/definitions/urologist'
import { UserDetailResponse } from '@/app/_lib/definitions/user'
import { sendAnalyticEvent } from '@/app/_lib/helpers/GoogleAnalyticsHelpers'
import { shareUrologist } from '@/app/_lib/services/urologist/share-urologist'
import { useState } from 'react'

type Props = {
  data: UrologistType
  user: UserDetailResponse | null
}

export function useUrologistDescription({ user, data }: Props) {
  const { toast } = useToast()

  const [openVouchDialog, setOpenVouchDialog] = useState(false)
  const [openReviewDialog, setOpenReviewDialog] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  // Flag for vouch-unvouch urologist
  const isUserAlreadyVouch = !!user?.vouches.filter((urologist) => urologist.urologist_id === data.id).length

  function handleShareUrologist() {
    navigator.clipboard.writeText(window.location.href)
    setCopySuccess(true)
    toast({
      description: 'Copied to clipboard!',
    })
    sendAnalyticEvent({ event_category: 'share', event_value: { uroname: data.name } })

    // Post request API
    try {
      shareUrologist({ urologistId: data.id })
    } catch (error) {
      console.error(error)
    }

    setTimeout(() => {
      setCopySuccess(false)
    }, 2000)
  }

  return {
    copySuccess,
    isUserAlreadyVouch,
    openVouchDialog,
    openReviewDialog,
    setOpenReviewDialog,
    setOpenVouchDialog,
    handleShareUrologist,
  }
}
