'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoaderCircle } from 'lucide-react'
import { useLoginForm } from './useLoginForm'

export function LoginForm() {
  const { form, error, loading, onSubmit } = useLoginForm()

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

        {error.isError && (
          <span className='text-red-500 font-semibold'>{error.message}</span>
        )}

        <Button type="submit" disabled={loading} className="flex items-center gap-2 w-full h-[50px] bg-[#f6a404] text-white rounded-lg text-xl hover:bg-[#f6a404]">
          {loading && <LoaderCircle size={20} className='animate-spin' />}
          Sign In
        </Button>
      </form>
    </Form>
  )
}
