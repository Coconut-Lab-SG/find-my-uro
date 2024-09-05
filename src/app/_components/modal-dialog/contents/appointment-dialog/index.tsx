import { CustomPhoneInput } from '@/app/_components/custom-phone-input'
import { Button } from '@/app/_components/ui/button'
import { Calendar } from '@/app/_components/ui/calendar'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/app/_components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/app/_components/ui/popover'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/app/_components/ui/select'
import { DEFAULT_AVATAR_PATH, UROLOGIST_TIMESLOT_SCHEDULE } from '@/app/_lib/constants/string-vars'
import { UrologistType } from '@/app/_lib/definitions/urologist'
import { getNextBusinessDay, isWeekend } from '@/app/_lib/helpers/DateTimeHelpers'
import { cn } from '@/app/_lib/utils'
import { format } from 'date-fns'
import { CalendarDays, LoaderCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useAppointmentDialog } from './hooks/useAppointmentDialog'

type AppointmentDialogProps = {
  data: UrologistType
  slug: string
  closeAppointmentDialog: () => void
}

export function AppointmentDialog({ data, slug, closeAppointmentDialog }: AppointmentDialogProps) {
  const { isUserAuthenticated, form, loading, onSubmit } = useAppointmentDialog({
    urologist_practice_id: data.practice.id,
    closeAppointmentDialog,
    urologist_name: data.name,
  })

  return (
    <div className="flex flex-col w-full py-5 gap-6">
      <div className="flex flex-col gap-4 px-6">
        <div className="flex items-center justify-center gap-2">
          <Image alt="urologist-img" src={data.avatar ?? DEFAULT_AVATAR_PATH} width={87} height={95} className="rounded-full" />
          <span className="text-xl text-[#303f9f] text-center">{data.name}</span>
        </div>
      </div>
      {!isUserAuthenticated ? (
        <div className="flex flex-col gap-2 px-6 text-center">
          <p className="text-base">
            To create an appointment with <span className="capitalize font-bold">{data.name}</span>, you will need to sign in
          </p>
          <Link prefetch={false} href={`/account/login?referrer=/urologist/${slug}`}>
            Continue with Email
          </Link>
        </div>
      ) : (
        // Appointment form content
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 px-6 pb-10">
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomPhoneInput placeholder="Enter a phone number" className="h-[50px] border-[#ced4da]" {...field} />
                  </FormControl>
                  <FormMessage className="text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn('w-full h-[50px] justify-between px-3 font-normal border-[#ced4da]', !field.value && 'text-muted-foreground')}
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarDays size={16} />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        fromDate={getNextBusinessDay()}
                        disabled={isWeekend}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-base" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full h-[50px] border-[#ced4da] focus:ring-0">
                      <SelectValue placeholder="Select a timeslot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="overflow-y-auto max-h-[15rem]">
                        <SelectLabel>Available Timeslot</SelectLabel>
                        {UROLOGIST_TIMESLOT_SCHEDULE.map((time) => (
                          <SelectItem key={time} value={time} className="cursor-pointer hover:bg-blue-50">
                            {time}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-base" />
                </FormItem>
              )}
            />

            <p className="text-[#808080] text-sm">
              By clicking the "Submit Review" button, you agree to Find My Uro's{' '}
              <Link href="/terms-of-use" target="_blank">
                Terms
              </Link>
              ,{' '}
              <Link href="/privacy" target="_blank">
                Privacy Policy
              </Link>
              , and{' '}
              <Link href="/review-guidelines" target="_blank">
                Review Guidelines
              </Link>
            </p>
            <Button
              variant="ghost"
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-[#f6a404] w-full text-xl text-white h-11 hover:bg-[#f6a404] hover:text-white"
            >
              {loading && <LoaderCircle size={20} className="animate-spin" />}
              Submit
            </Button>
          </form>
        </Form>
      )}
    </div>
  )
}
AppointmentDialog.displayName = 'AppointmentDialog'
