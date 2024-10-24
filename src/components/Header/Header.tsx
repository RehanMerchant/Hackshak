"use client"
import React from 'react'
import { AiFillCode } from 'react-icons/ai'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import { MdLogout } from "react-icons/md";
import { Search } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SearchComp from '../Search/Search'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const Header = () => {
  return (
    <div className='w-full h-[60px] z-50 border-b-2 justify-between bg-background flex md:hidden items-center fixed px-2'>
        <div className='flex md:hidden items-center'>
     <AiFillCode className="size-7" />
        <p className="font-medium ml-2 font-mono md:hidden lg:flex text-2xl">
          Hackshak
        </p>
        </div>
        <div className='flex items-center gap-4'>



<Sheet>
  <SheetTrigger><Search  className='size-5'/></SheetTrigger>
  <SheetContent className='w-full md:hidden'>
    <SheetHeader>
      <SheetTitle>Search</SheetTitle>
    </SheetHeader>
    <SearchComp/>
  </SheetContent>
</Sheet>




   

<DropdownMenu>
  <DropdownMenuTrigger>

  <Avatar className='size-8'>
<AvatarImage src="https://github.com/shadcn.png" />
<AvatarFallback>CN</AvatarFallback>
</Avatar>

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href={"/profile"}> <DropdownMenuItem>Profile </DropdownMenuItem> </Link>
    <DropdownMenuItem>Dashboard</DropdownMenuItem>
    <DropdownMenuItem> <MdLogout /> Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

</div>
        </div>


   
  )
}

export default Header