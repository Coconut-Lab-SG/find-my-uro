'use client'

import { Button } from '@/app/_components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/app/_components/ui/form'
import { Input } from '@/app/_components/ui/input'
import { LoaderCircle, MailCheck } from 'lucide-react'
import { useForgotPasswordForm } from './useForgotPasswordForm'

export function ForgotPasswordForm() {
  const { form, loading, error, success, onSubmit } = useForgotPasswordForm()

  if (success) {
    return <SendEmailSuccess />
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email Address" className="h-[50px] border-[#ced4da]" {...field} />
              </FormControl>
              <FormMessage className="text-base" />
            </FormItem>
          )}
        />

        {error.isError && <span className="text-red-500 font-semibold">{error.message}</span>}

        <Button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 w-full h-[50px] bg-[#f6a404] text-white rounded-lg text-xl hover:bg-[#f6a404]"
        >
          {loading && <LoaderCircle size={20} className="animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  )
}

// Composing component
function SendEmailSuccess() {
  return (
    <div className="flex items-center text-center flex-col gap-3">
      <span className="font-semibold">Reset Password Email Sent.</span>
      <MailCheck size={50} />
      <span className="text-sm">Please check your email for instructions to reset your password.</span>
    </div>
  )
}
