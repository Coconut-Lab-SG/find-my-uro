import { appointmentSchema } from '@/app/_lib/definitions/authentication-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function useAppointmentDialog() {
  const form = useForm<z.infer<typeof appointmentSchema>>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: '',
      phone_number: '',
      urologist_name: '',
      time: undefined,
      email_id: '',
    },
  })

  function onSubmit(values: z.infer<typeof appointmentSchema>) {
    console.log(values)
  }

  return {
    form,
    onSubmit,
  }
}
