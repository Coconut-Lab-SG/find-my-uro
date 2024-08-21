import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/_components/ui/tabs'
import { PastAppointmentList } from './past-appointment-list'
import { UpcomingAppointmentList } from './upcoming-appointment-list'

export function TabMenu() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xl font-bold text-center">Your Appointments</span>
      <Tabs defaultValue="upcoming" className="flex flex-col items-center gap-3">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <UpcomingAppointmentList />
        </TabsContent>
        <TabsContent value="past">
          <PastAppointmentList />
        </TabsContent>
      </Tabs>
    </div>
  )
}
