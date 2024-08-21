import { AppointmentTable } from '@/app/_components/ui/appointment-table'

export function PastAppointmentList() {
  // TODO: Adjust later according to API data
  const dummyData = [
    {
      id: 'ABC123',
      urologist_name: 'Eden Paul Hazard, M.D',
      practice_place: 'Nihonbashi-ku, Tokyo, Japan',
      appointment_time: 'Monday, 17 December 2024 19:30',
    },
    {
      id: 'ABC1234',
      urologist_name: 'Mozard Bach, M.D',
      practice_place: 'Chuo-ku, Tokyo, Japan',
      appointment_time: 'Tuesday, 24 December 2024 19:30',
    },
  ]

  return (
    <div className="flex flex-col gap-2">
      <AppointmentTable dataset={dummyData} />
    </div>
  )
}
