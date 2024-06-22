import { loginSchema } from "@/definitions/login-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useLoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ''
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return {
    form,
    onSubmit
  }
}