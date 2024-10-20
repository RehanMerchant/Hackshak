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


const Signup = () => {
    const FormSchema = z.object({
        email: z.string().min(2, {
          message: "Enter a valid email",
        }),
        password:z.string().min(6,{
          message: "Password must be at least 6 characters.",
        }),
        username:z.string().min(2,{
          message: "username must be at least 2 characters",
        })
      })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          username:"",
          email: "",
          password:""
        },
      })


      function onSubmit(_data: z.infer<typeof FormSchema>) {
        toast({
          variant:"success",
          title: "Account created!",
      })
         
      }
     

  return (
    <Form {...form}>
    <form  onSubmit={form.handleSubmit(onSubmit)} className=" md:space-y-3 space-y-1 ">


      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="example@gmail.com" {...field} />
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
          </FormItem>
          
          
        )}
      />


<FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="john_doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          
          
        )}
      />
<div className="pt-3">
<Button className="w-full" type="submit" >Signup</Button>
</div>
     
    </form>
  </Form>
  )
}

export default Signup;