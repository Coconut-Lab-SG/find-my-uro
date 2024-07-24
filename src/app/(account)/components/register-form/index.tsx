'use client'

import { Button } from '@/app/_components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/app/_components/ui/form'
import { Input } from '@/app/_components/ui/input'
import { LoaderCircle } from 'lucide-react'
import { useRegisterForm } from './useRegisterForm'

export function RegisterForm() {
  const { form, loading, error, onSubmit } = useRegisterForm()

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
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="First Name" className="h-[50px] border-[#ced4da]" {...field} />
              </FormControl>
              <FormMessage className="text-base" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Last Name" className="h-[50px] border-[#ced4da]" {...field} />
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
        <FormField
          control={form.control}
          name="password_confirm"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Confirm Password" type="password" className="h-[50px] border-[#ced4da]" {...field} />
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
          Sign Up
        </Button>
      </form>
    </Form>
  )
}
