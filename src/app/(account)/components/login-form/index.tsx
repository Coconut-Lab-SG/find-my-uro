'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useLoginForm } from './useLoginForm'

export function LoginForm() {
  const { form, onSubmit } = useLoginForm()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email address" className="h-[50px] border-[#ced4da]" {...field} />
              </FormControl>
              <FormMessage className="text-base" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" type="password" className="h-[50px] border-[#ced4da]" {...field} />
              </FormControl>
              <FormMessage className="text-base" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full h-[50px] bg-[#f6a404] text-white rounded-lg text-xl hover:bg-[#f6a404]">
          Sign In
        </Button>
      </form>
    </Form>
  )
}
