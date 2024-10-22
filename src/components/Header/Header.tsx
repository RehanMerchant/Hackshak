"use client"
import React from 'react'
import { AiFillCode } from 'react-icons/ai'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import { MdFileUpload } from "react-icons/md";

const Header = () => {
  return (
    <div className='w-full h-[55px] z-50 border-b-2 justify-between bg-background flex md:hidden items-center fixed px-2'>
        <div className='flex md:hidden items-center'>
     <AiFillCode className="size-7" />
        <p className="font-medium ml-2 font-mono md:hidden lg:flex text-2xl">
          Hackshak
        </p>
        </div>
        <div className='flex items-center gap-4'>


<MdFileUpload className='size-6'/>
<Link href={'/profile'}>
   
   <Avatar className='size-8'>
<AvatarImage src="https://github.com/shadcn.png" />
<AvatarFallback>CN</AvatarFallback>
</Avatar>
</Link>
</div>
        </div>
   
  )
}

export default Header