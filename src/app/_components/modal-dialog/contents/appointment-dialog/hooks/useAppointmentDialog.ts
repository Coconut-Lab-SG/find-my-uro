import { useToast } from '@/app/_components/ui/use-toast'
import { AppointmentFormSchema } from '@/app/_lib/definitions/appointment'
import { formatCalendarInput, getNextBusinessDay } from '@/app/_lib/helpers/DateTimeHelpers'
import { sendAnalyticEvent } from '@/app/_lib/helpers/GoogleAnalyticsHelpers'
import { getUserData } from '@/app/_lib/helpers/UserHelpers'
import { createAppointment } from '@/app/_lib/services/appointment/create-appointment'
import { zodResolver } from '@hookform/resolvers/zod'
import { getCookie } from 'cookies-next'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
  urologist_practice_id: string
  urologist_name: string
  closeAppointmentDialog: () => void
}

export function useAppointmentDialog({ urologist_practice_id, urologist_name, closeAppointmentDialog }: Props) {
  const { toast } = useToast()
  const token = getCookie('access_token')
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof AppointmentFormSchema>>({
    resolver: zodResolver(AppointmentFormSchema),
    defaultValues: {
      phone_number: '',
      date: getNextBusinessDay(),
      time: '',
      urologist_practice_id: urologist_practice_id,
    },
  })

  async function onSubmit(values: z.infer<typeof AppointmentFormSchema>) {
    // Processed data for request body
    const bodyData = {
      phone_number: parseInt(values.phone_number),
      time: `${formatCalendarInput(values.date)} ${values.time}:00`,
      urologist_practice_id: values.urologist_practice_id,
    }

    const access_token = getCookie('access_token') ?? ''
    const userData = getUserData({ token: access_token })

    try {
      setLoading(true)
      await createAppointment({ body: bodyData, token: access_token }).then(() => {
        toast({
          description: 'Successfully created appointment!',
        })

        sendAnalyticEvent({
          event_category: 'book_appointment',
          event_value: {
            email: userData?.email,
            phone: bodyData.phone_number,
            username: `${userData?.first_name} ${userData?.last_name}`,
            uroname: urologist_name,
          },
        })
        closeAppointmentDialog()
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    isUserAuthenticated: !!token,
    form,
    loading,
    onSubmit,
  }
}
