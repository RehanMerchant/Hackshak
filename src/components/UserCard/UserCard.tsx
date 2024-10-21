import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const UserCard = () => {
  return (
    <Link href={'/profile'}>
   
    <div className=' gap-2 flex p-2 lg:w-[220px]  justify-center md:w-[60px] items-center rounded-md hover:bg-secondary cursor-pointer'>
       <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<div className=" flex-col lg:flex hidden">
<p>
Sk Rehan
</p>
<p className="text-xs">skmdrehan@gmail.com</p>
</div>

        </div>
        </Link>
  )
}

export default UserCard