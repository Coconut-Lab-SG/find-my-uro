import { useToast } from '@/app/_components/ui/use-toast'
import { vouchUrologist } from '@/app/_lib/services/urologist/vouch-urologist'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {
  urologist_id: string
  closeVouchDialog: () => void
}

export function useVouchDialog({ urologist_id, closeVouchDialog }: Props) {
  const { toast } = useToast()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const token = getCookie('access_token')

  async function submitVouch() {
    setLoading(true)
    if (token) {
      try {
        const bodyData = {
          urologist_id: urologist_id,
        }
        await vouchUrologist({ body: bodyData, token: token }).then(() => {
          toast({
            description: 'Vouch urologist success!',
          })
          router.refresh()
          closeVouchDialog()
        })
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
  }

  return {
    isUserAuthenticated: !!token,
    loading,
    submitVouch,
  }
}
