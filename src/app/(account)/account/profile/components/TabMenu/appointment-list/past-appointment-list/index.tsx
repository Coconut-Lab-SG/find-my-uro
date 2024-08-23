import { AppointmentTable } from '@/app/_components/appointment-table'
import { Loader2 } from 'lucide-react'
import { useAppointmentList } from '../hooks/useAppointmentList'

export function PastAppointmentList() {
  const { appointment, loading } = useAppointmentList({ appointmentType: 'past' })

  console.log(appointment)

  if (appointment === null || loading) {
    return (
      <div className="flex items-center gap-3 justify-center">
        <Loader2 size={16} className="animate-spin" />
        <span>Loading data...</span>
      </div>
    )
  }

  if (appointment && !appointment.data.length) {
    return (
      <div className="flex justify-center">
        <span>No appointment available.</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <AppointmentTable dataset={appointment.data} meta={appointment.meta} />
    </div>
  )
}
