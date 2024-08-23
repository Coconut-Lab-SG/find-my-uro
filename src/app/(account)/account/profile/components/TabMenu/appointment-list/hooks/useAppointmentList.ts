import { AppointmentListType } from '@/app/_lib/definitions/appointment'
import { getPastAppointments } from '@/app/_lib/services/appointment/get-past-appointments'
import { getUpcomingAppointments } from '@/app/_lib/services/appointment/get-upcoming-appointments'
import { getCookie } from 'cookies-next'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  appointmentType: 'upcoming' | 'past'
}

export function useAppointmentList({ appointmentType }: Props) {
  const searchParams = useSearchParams()
  const pageQuery = searchParams.get('page') ?? '1'

  const [data, setData] = useState<AppointmentListType | null>(null)
  const [loading, setLoading] = useState(true)

  async function getUpcomingAppointmentsList() {
    const token = getCookie('access_token') ?? ''
    try {
      setLoading(true)
      if (appointmentType === 'upcoming') {
        await getUpcomingAppointments({ token, page: pageQuery }).then((resp) => {
          setData(resp)
        })
      }
      if (appointmentType === 'past') {
        await getPastAppointments({ token, page: pageQuery }).then((resp) => {
          setData(resp)
        })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUpcomingAppointmentsList()
  }, [searchParams])

  return {
    appointment: data,
    loading,
  }
}
