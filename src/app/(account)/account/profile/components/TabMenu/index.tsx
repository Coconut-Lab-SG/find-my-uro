'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/_components/ui/tabs'
import { useRouter } from 'next/navigation'
import { PastAppointmentList, UpcomingAppointmentList } from './appointment-list'

export function TabMenu() {
  const router = useRouter()

  // Reset page query every tab changing for pagination requirement
  const handleTabClick = () => {
    router.push(`/account/profile?page=1`)
  }

  return (
    <div className="flex flex-col gap-3">
      <span className="text-xl font-bold text-center">Your Appointments</span>
      <Tabs defaultValue="upcoming" className="flex flex-col items-center gap-3">
        <TabsList>
          <TabsTrigger value="upcoming" onClick={handleTabClick}>
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="past" onClick={handleTabClick}>
            Past
          </TabsTrigger>
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
