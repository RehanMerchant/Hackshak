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
import { BiLike } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { LuEye } from "react-icons/lu";


interface PostInterface{

 name:String;
 date:String;
 Dp:any;
 title:String;
 desc:String;
 postimage:any;
 likesno:String;
 views:String;

}



const PostComponent = ({name,date,Dp,title,desc,postimage,likesno, views}:PostInterface) => {
  return (
    <div className="w-full border-2 cursor-pointer rounded-md p-2">
      <div className="py-4 flex">
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
              <HiDotsVertical className="size-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Post Actions</DropdownMenuLabel>
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
  <div className="flex gap-4 items-center  cursor-pointer  text-sm text-muted-foreground">
<p className="flex items-center gap-1"><LuEye className="size-4"/>{views}</p>
<p className="flex items-center gap-1">

<BiLike className="size-4 cursor-pointer"/>
   {likesno} </p>

  </div>

</div>
    </div>
  );
};

export default PostComponent;
