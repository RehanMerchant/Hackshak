"use client"
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const pathname = usePathname();

  return (

    <div className="md:pt-10 md:pl-10 pt-5 pl-5">
    <p className="md:text-2xl text-xl pb-4">Your Dashboard</p>

    <div className="py-1 px-2 border-b-2 w-fit pb-2  gap-2 flex md:text-[15px] text-sm">
     <Link href={'/dashboard'}>
      <div className={cn("hover:bg-secondary w-fit p-1 px-2 rounded-md cursor-pointer", pathname== '/dashboard' ? 'bg-secondary': null)}>
        Home
      </div>
      </Link>
      <Link href={'/dashboard/post'}>
      <div className={cn("hover:bg-secondary w-fit p-1 px-2 rounded-md cursor-pointer", pathname== '/dashboard/post' ? 'bg-secondary': null)}>
        Posts
      </div>
      </Link>
      <Link href={'/dashboard/notification'}>
      <div className={cn("hover:bg-secondary w-fit p-1 px-2 rounded-md cursor-pointer", pathname== '/dashboard/notification' ? 'bg-secondary': null)}>
        Notification
      </div>
      </Link>
      <Link href={'/dashboard/support'}>
      <div className={cn("hover:bg-secondary w-fit p-1 px-2 rounded-md cursor-pointer", pathname== '/dashboard/support' ? 'bg-secondary': null)}>
        Support
      </div>
      </Link>
    </div>

    <div className="md:pt-6  pt-5 ">

{children}
      
    </div>
  </div>
    
  );
}
