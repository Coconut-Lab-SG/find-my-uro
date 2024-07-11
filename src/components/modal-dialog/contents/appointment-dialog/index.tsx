import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarDays } from 'lucide-react'
import Image from 'next/image'
import { useAppointmentDialog } from './hooks/useAppointmentDialog'

export function AppointmentDialog() {
  const { form, onSubmit } = useAppointmentDialog()

  return (
    <div className="flex flex-col w-full py-5 gap-6">
      <div className="flex flex-col gap-4 px-6">
        <div className="flex items-center justify-center">
          <Image alt="urologist-img" src="/assets/images/urologist/dummy-urologist-img.png" width={87} height={95} className="rounded-full" />
          <span className="text-xl text-[#303f9f]">Yaniv Larish, M.D</span>
        </div>
      </div>

      {/* Form content */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 px-6 pb-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your name*" className="h-[50px] border-[#ced4da]" {...field} />
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Phone Number*" className="h-[50px] border-[#ced4da]" {...field} />
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="urologist_name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Urologist Name" className="h-[50px] border-[#ced4da]" {...field} />
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
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
                    <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                  </PopoverContent>
                </Popover>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email_id"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email ID*" className="h-[50px] border-[#ced4da]" {...field} />
                </FormControl>
                <FormMessage className="text-base" />
              </FormItem>
            )}
          />

          <p className="text-[#808080] text-sm">
            By clicking the "Submit Review" button, you agree to Find My Uro's{' '}
            <a href="" target="_blank">
              Terms
            </a>
            ,{' '}
            <a href="" target="_blank">
              Privacy Policy
            </a>
            , and{' '}
            <a href="" target="_blank">
              Review Guideline
            </a>
          </p>
          <Button variant="ghost" type="submit" className="bg-[#f6a404] w-full text-xl text-white h-11 hover:bg-[#f6a404] hover:text-white">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
AppointmentDialog.displayName = 'AppointmentDialog'
