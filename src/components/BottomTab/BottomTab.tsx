"use client"
import { cn } from "@/lib/utils";
import { Bell, Users, Home, LucideIcon, MessageCircle, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillCode } from "react-icons/ai";




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
    <div className='fixed bottom-0 left-0 w-full border-t-2 h-[60px] flex items-center px-2'>
       
       <ul className="flex md:flex-col justify-between w-full">
     <NavTab Icon={Home} link={"/"}/>
     <NavTab  Icon={Search} link={"/search"}/>
     <NavTab  Icon={Users} link={"/cliques"}/>
     <NavTab  Icon={Bell} link={"/notifications"}/>
     <NavTab Icon={MessageCircle} link={"/messages"}/>
    </ul>
        
        </div>
  )
}

export default BottomTab