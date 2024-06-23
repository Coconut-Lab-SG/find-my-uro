'use client'

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegisterForm } from "./useRegisterForm";

export function RegisterForm() {
  const { form, onSubmit } = useRegisterForm()

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
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Confirm Password" type="password" className="h-[50px] border-[#ced4da]" {...field} />
              </FormControl>
              <FormMessage className="text-base" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full h-[50px] bg-[#f6a404] text-white rounded-lg text-xl hover:bg-[#f6a404]">Sign Up</Button>
      </form>
    </Form>
  )
}