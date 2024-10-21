"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdMoreHoriz } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Flag, Star } from "lucide-react";
import { FaRegCommentDots } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";



interface PostInterface{

 name:String;
 date:String;
 Dp:any;
 title:String;
 desc:String;
 postimage:any;

}



const PostComponent = ({name,date,Dp,title,desc,postimage}:PostInterface) => {
  const [like,SetLike] = useState(false)
  return (
    <div className="w-full border-2 hover:bg-secondary cursor-pointer rounded-md p-2">
      <div className="py-4 flex items-center  justify-between">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src={Dp} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>

        <div className="px-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MdMoreHoriz className="size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Star />
                Star
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Flag />
                Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Image src={postimage}  alt="Image" className="rounded-md object-cover" />
<div className="p-2 md:max-w-[80%]">


<p className=" md:text-lg">
{title}
</p>
<p className="text-muted-foreground md:text-base text-sm">
 {desc}
  </p>
</div>
<div className="p-2 flex justify-between">
  <div className="flex items-center gap-2 cursor-pointer md:text-base text-sm">
 <FaRegCommentDots/> Comments
  </div>
<div className="px-2 items-center">
{
  like ? <BiSolidLike onClick={()=>SetLike(!like)} className="size-5 cursor-pointer"/> :<BiLike onClick={()=>SetLike(!like)} className="size-5 cursor-pointer"/>
}



</div>
</div>
    </div>
  );
};

export default PostComponent;
