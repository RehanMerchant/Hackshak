"use client"
import React from 'react'
import { AiFillCode } from 'react-icons/ai'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full h-[60px] border-b-2 justify-between bg-background flex md:hidden items-center fixed px-2'>
        <div className='flex md:hidden items-center'>
     <AiFillCode className="size-7" />
        <p className="font-medium ml-2 font-mono md:hidden lg:flex text-2xl">
          Hackshak
        </p>
        </div>
        <Link href={'/profile'}>
   
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</Link>
        </div>
   
  )
}

export default Header