import { useToast } from '@/app/_components/ui/use-toast'
import { AppointmentFormSchema } from '@/app/_lib/definitions/appointment'
import { formatCalendarInput } from '@/app/_lib/helpers/DateTimeHelpers'
import { createAppointment } from '@/app/_lib/services/appointment/create-appointment'
import { zodResolver } from '@hookform/resolvers/zod'
import { getCookie } from 'cookies-next'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
  urologist_practice_id: string
  closeAppointmentDialog: () => void
}

export function useAppointmentDialog({ urologist_practice_id, closeAppointmentDialog }: Props) {
  const { toast } = useToast()
  const token = getCookie('access_token')
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof AppointmentFormSchema>>({
    resolver: zodResolver(AppointmentFormSchema),
    defaultValues: {
      phone_number: '',
      date: new Date(),
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
    try {
      setLoading(true)
      await createAppointment({ body: bodyData, token: access_token }).then((resp) => {
        toast({
          description: 'Successfully created appointment!',
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
