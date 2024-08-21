import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/_components/ui/table'

type Props = {
  dataset: {
    id: string
    urologist_name: string
    practice_place: string
    appointment_time: string
  }[]
}

export function AppointmentTable({ dataset }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Appointment ID</TableHead>
          <TableHead>Urologist Name</TableHead>
          <TableHead>Practice Place</TableHead>
          <TableHead>Appointment Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataset.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium">{data.id}</TableCell>
            <TableCell>{data.urologist_name}</TableCell>
            <TableCell>{data.practice_place}</TableCell>
            <TableCell>{data.appointment_time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
