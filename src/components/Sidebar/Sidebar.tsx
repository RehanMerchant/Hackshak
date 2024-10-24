"use client"
import { cn } from "@/lib/utils";
import {  Home, LucideIcon, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiFillCode } from "react-icons/ai";
import UserCard from "../UserCard/UserCard";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SearchComp from "../Search/Search";


interface NabTabInterface {
    label:String;
    Icon:LucideIcon;
    link:any;
  }
  function NavTab ({label,Icon,link}:NabTabInterface){
    const pathname = usePathname()
    return(
      <Link href={link}>
      <li className={cn(`lg:py-2 text-primary flex gap-2 cursor-pointer hover:bg-secondary  lg:px-3 p-2 rounded-full items-center`, pathname == link ? 'bg-secondary' : '')}>
     <Icon className="size-6 shrink-0"/> <p className="lg:flex hidden ">{label}</p> 
      </li>
      </Link>
    )
  }
  
  
const Sidebar = () => {

  const pathname = usePathname()
  return (
    <div className='fixed top-0  md:border-r-2  left-0 h-[100%] bg-background lg:w-[220px] md:w-[60px]'>
      <div className="w-full  py-10 md:flex hidden items-center justify-center">
        <AiFillCode className="size-8" />
        <p className="font-medium ml-2 font-mono md:hidden lg:flex text-3xl">
          Hackshak
        </p>
      </div>
      <div className="w-full px-2  ">
    <ul className="flex md:flex-col justify-between lg:gap-y-3 md:gap-y-4 ">
     <NavTab label={'Home'} Icon={Home} link={"/"}/>

  

      <Sheet>
  <SheetTrigger>   <li className={cn(`lg:py-2 text-primary flex gap-2 cursor-pointer hover:bg-secondary  lg:px-3 p-2 rounded-full items-center`)}>
     <Search className="size-6 shrink-0"/> <p className="lg:flex hidden">Search</p> 
      </li></SheetTrigger>
  <SheetContent side={"left"} className="w-[320px] hidden md:flex md:flex-col">
    <SheetHeader>
      <SheetTitle>Search</SheetTitle>
    </SheetHeader>
   <SearchComp/>
  </SheetContent>
</Sheet>


    </ul>
    
   </div>
   <div className="absolute bottom-5 ">
    <UserCard/>
   </div>
    </div>
  )
}

export default Sidebar