"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MdVerified } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Image from "next/image";
import { LuEye } from "react-icons/lu";
import { BiLike } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { useTheme } from "next-themes"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Moon, Sun } from "lucide-react"
import { useState } from "react";
import Link from "next/link";
import Post from '@/components/PostComponent/Post1.png'
import Post2 from '@/components/PostComponent/Post2.jpg'
import Post3 from '@/components/PostComponent/Post3.png'


function ProfileViewPost(){
return(
  <div className=" flex md:w-[500px] border transition ease-in-out cursor-pointer hover:bg-secondary w-full rounded-md p-2 h-auto py-3">
<div className="h-full w-[80px] shrink-0">
<Image
        src={Post}
        width={0}
        height={0}
        alt="Picture of the author"
        className="h-auto w-full"
      />
</div>
<div className=" ml-2">
<p className="text-sm">
Javascript Complete Roadmap for Beginners.
</p>
<div className="text-xs text-muted-foreground flex gap-3 mt-1">
<p className="flex items-center gap-1"><LuEye className="size-4"/>2.3K</p>
<p className="flex items-center gap-1">

<BiLike className="size-4 cursor-pointer"/>
   1.5K</p>
</div>
</div>
</div>
)
}



const ProfilePage = () => {
  const { setTheme } = useTheme()
  const [value, Setvalue]= useState("Sk Rehan")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    Setvalue(event.target.value);
  };
  return (
    <div>
      <div className="md:p-10 p-5">
      <div className="flex items-center pb-4 justify-between md:w-[600px]">

<p className="md:text-2xl text-xl">Your Profile</p>

<Dialog>
  <DialogTrigger><IoSettingsSharp className="size-5 cursor-pointer"/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Your Prefrences</DialogTitle>
 </DialogHeader>
 <div>

 <div className="py-2">
  <div>
<p className="text-lg">Theme</p>
<p className="text-sm text-muted-foreground">You can change your Theme, we provide Light and Dark mode.</p>
</div>
<div className="pt-2 flex gap-2">
<DialogClose>
<Button onClick={() => setTheme("dark")} className="" variant={"outline"}>
<Moon/>
</Button>
</DialogClose>
<DialogClose>
<Button onClick={() => setTheme("light")} variant={"outline"}>
<Sun/>
</Button>
</DialogClose>
<DialogClose>
<Button onClick={() => setTheme("system")} variant={"outline"}>
Auto
</Button>
</DialogClose>
</div>
 </div>
 </div>
</DialogContent>
</Dialog>



</div>

        <div className="md:mt-6 mt-5">
          <div className="flex md:gap-4 gap-2">
            <div className="flex flex-col items-center gap-3">
              <Avatar className="md:size-24 size-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="text-3xl">S</AvatarFallback>
              </Avatar>
              <div className="px-3 text-sm py-1 bg-secondary rounded-md cursor-pointer hover:opacity-85">
                Change
              </div>
            </div>
            <div className="p-2 flex flex-col gap-y-2 md:text-base text-sm">
              <input
                value={value}
                onChange={handleChange}
                className="px-2 py-1.5 w-[80%]  md:w-[300px] bg-secondary rounded-md outline-none"
              />
              <input
                disabled
                value={"skmdrehan@gmail.com"}
                className=" text-muted-foreground px-2 py-1.5 md:w-[400px] rounded-md outline-none"
              />
              <div className="flex items-center gap-2">
                <input
                  disabled
                  value={"25 October 2005"}
                  className="px-2  w-[50%] py-1.5 rounded-md  text-muted-foreground"
                />
                <div className="px-2 py-1.5 bg-secondary rounded-md text-muted-foreground flex gap-2 items-center">
                  <MdVerified className="text-green-500" /> Verified
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-5 mt-3 w-full ">
          <textarea
            placeholder="Enter your bio here"
            className=" w-full md:w-[600px] resize-none md:text-base text-sm bg-background outline-none border-2 md:h-40 h-32 rounded-md p-2"
          />
        </div>
      <div className="flex justify-end mt-2 md:w-[600px]">

<Button variant={"sucess"}>
Save
</Button>

</div>
      </div>

      <div className="md:pt-10 md:pl-10 p-5">
        <div className="flex items-center pb-4 justify-between md:w-[600px]">

      <p className="md:text-2xl text-xl">Content</p>

      <Link href={"/dashboard"}> <Button  variant={"secondary"}>
    <MdSpaceDashboard />  Dashboard
    </Button></Link>
</div>
<div className="pt-4 lg:w-[calc(100vw-320px)]  md:w-[calc(100vw-160px)] w-[calc(100vw-40px)]">

<Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="account">Post</TabsTrigger>
    <TabsTrigger value="password">Videos</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="mt-4 flex flex-col gap-y-4">
<ProfileViewPost/>
<ProfileViewPost/>
<ProfileViewPost/>
<ProfileViewPost/>

  </TabsContent>
  <TabsContent value="password" className="w-full justify-center items-center flex">
  
    <p className="text-muted-foreground">No Videos Avaliable
      </p>
    
    </TabsContent>
</Tabs>


</div>




      </div>

    </div>
  );
};

export default ProfilePage;
