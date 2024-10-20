"use client"
import { cn } from "@/lib/utils";
import { Bell, Users, Home, LucideIcon, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";





interface NabTabInterface {

    Icon:LucideIcon;
    link:any;
  }
  function NavTab ({Icon,link}:NabTabInterface){
    const pathname = usePathname()
    return(
      <Link href={link}>
      <li className={cn(` text-primary flex  cursor-pointer hover:bg-secondary  p-2 rounded-full items-center`, pathname == link ? 'bg-secondary' : '')}>
     <Icon className="size-6 shrink-0"/>
      </li>
      </Link>
    )
  }
  

const BottomTab = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full z-50 border-t-2 h-[60px] bg-background flex items-center px-2'>
       
       <ul className="flex md:flex-col justify-between w-full">
     <NavTab Icon={Home} link={"/"}/>
     <NavTab  Icon={Search} link={"/search"}/>
     <NavTab  Icon={Users} link={"/cliques"}/>
     <NavTab  Icon={Bell} link={"/notifications"}/>
    </ul>
        
        </div>
  )
}

export default BottomTab