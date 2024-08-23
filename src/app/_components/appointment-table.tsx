import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/_components/ui/table'
import { useSearchParams } from 'next/navigation'
import { AppointmentType } from '../_lib/definitions/appointment'
import { PaginationMetaType } from '../_lib/definitions/pagination'
import { CustomPagination } from './custom-pagination'

type Props = {
  dataset: AppointmentType[]
  meta: PaginationMetaType
}

export function AppointmentTable({ dataset, meta }: Props) {
  const query = useSearchParams()
  const currentPage = query.get('page') ?? '1'

  return (
    <div className="flex flex-col gap-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Appointment ID</TableHead>
            <TableHead>Urologist Name</TableHead>
            <TableHead>Practice Address</TableHead>
            <TableHead>Appointment Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataset.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">{data.appointment_code}</TableCell>
              <TableCell>{data.urologist_name}</TableCell>
              <TableCell>{data.appointment_address}</TableCell>
              <TableCell>{data.appointment_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CustomPagination currentPage={currentPage} meta={meta} />
    </div>
  )
}
