import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdLogout } from "react-icons/md";
const UserCard = () => {
  return (
    <>
 
        <DropdownMenu>
  <DropdownMenuTrigger>

  
   
  <div className=' gap-2 flex p-2 lg:w-[220px]  justify-center md:w-[60px] items-center rounded-md hover:bg-secondary cursor-pointer'>
       <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<div className=" flex-col justify-start  lg:flex hidden ">
<p className="flex justify-start">
Sk Rehan
</p>
<p className="text-xs">skmdrehan@gmail.com</p>
</div>

        </div>

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href={"/profile"}> <DropdownMenuItem>Profile </DropdownMenuItem> </Link>
    <Link href={"/dashboard"}> <DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
    <DropdownMenuItem> <MdLogout />Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


       </>
  )
}

export default UserCard