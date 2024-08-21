import { AppointmentTable } from '@/app/_components/ui/appointment-table'

export function UpcomingAppointmentList() {
  // TODO: Adjust later according to API data
  const dummyData = [
    {
      id: 'ABC12345',
      urologist_name: 'Doctor Shimbashi, M.D',
      practice_place: 'Nihonbashi-ku, Tokyo, Japan',
      appointment_time: 'Monday, 17 December 2024 19:30',
    },
    {
      id: 'BCA4321',
      urologist_name: 'Hayaku Nara, M.D',
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
