"use client"
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/use-toast"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";


const Login = () => {
    const FormSchema = z.object({
        email: z.string().min(2, {
          message: "Enter a valid email",
        }),
        password:z.string().min(6,{
          message: "Password must be at least 6 characters.",
        })
      })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
          password:""
        },
      })

      function onSubmit(_data: z.infer<typeof FormSchema>) {
        toast({
          variant:"success",
          title: "Logged in Sucessfully",
      })
      }
     


  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}  className=" md:space-y-4 space-y-3 ">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="example@gmail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          
          
        )}
      />
            <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <PasswordInput placeholder="**********" {...field} />
            </FormControl>
            <FormMessage />
            <p className="text-sm text-neutral-500 py-2 underline cursor-pointer hover:text-neutral-700">
    Forgottern your password?
    </p>
          </FormItem>
          
          
        )}
      />
      <Button type="submit" className="w-full">Login</Button>
    </form>
  </Form>
  )
}

export default Login