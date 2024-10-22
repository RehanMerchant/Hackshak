"use client"
import { cn } from "@/lib/utils";
import { Bell, Users, Home, LucideIcon, Search, Upload } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillCode } from "react-icons/ai";
import UserCard from "../UserCard/UserCard";


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
     <Icon className="size-6 shrink-0"/> <p className="lg:flex hidden text-lg">{label}</p> 
      </li>
      </Link>
    )
  }
  
  
const Sidebar = () => {
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
     <NavTab label={'Search'} Icon={Search} link={"/search"}/>
     <NavTab label={'Cliques '} Icon={Users} link={"/cliques"}/>
     <NavTab label={'Notifications'} Icon={Bell} link={"/notifications"}/>
     <NavTab label={'Upload'} Icon={Upload} link={"/upload"}/>
    </ul>
    
   </div>
   <div className="absolute bottom-5 ">
    <UserCard/>
   </div>
    </div>
  )
}

export default Sidebar