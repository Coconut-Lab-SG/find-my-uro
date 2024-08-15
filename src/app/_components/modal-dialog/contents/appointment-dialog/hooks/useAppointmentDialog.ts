import { AppointmentFormSchema } from '@/app/_lib/definitions/appointment'
import { formatCalendarInput } from '@/app/_lib/helpers/DateTimeHelpers'
import { createAppointment } from '@/app/_lib/services/appointment/create-appointment'
import { zodResolver } from '@hookform/resolvers/zod'
import { getCookie } from 'cookies-next'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {
  urologist_id: string
}

export function useAppointmentDialog({ urologist_id }: Props) {
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof AppointmentFormSchema>>({
    resolver: zodResolver(AppointmentFormSchema),
    defaultValues: {
      phone_number: '',
      date: new Date(),
      time: '',
      urologist_practice_id: urologist_id,
    },
  })

  async function onSubmit(values: z.infer<typeof AppointmentFormSchema>) {
    // Processed data for request body
    const bodyData = {
      phone_number: parseInt(values.phone_number),
      time: `${formatCalendarInput(values.date)} ${values.time}`,
      urologist_practice_id: values.urologist_practice_id,
    }

    const access_token = getCookie('access_token') ?? ''
    try {
      setLoading(true)
      await createAppointment({ body: bodyData, token: access_token }).then((resp) => {
        console.log(resp)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    form,
    loading,
    onSubmit,
  }
}
