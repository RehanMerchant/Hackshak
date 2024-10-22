import { Upload } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { IoImageOutline } from "react-icons/io5";
import { Button } from '../ui/button';
const PostUpload = () => {
  return (
    <div className='w-full  px-2 py-4  rounded-md'>



<Dialog>
  <DialogTrigger className='w-full'>

  <div className='outline-none w-full flex  bg-secondary  py-3 rounded-full cursor-pointer px-3 justify-between'>
   <p className='text-muted-foreground'> Whats on Your Mind, Post it </p>
 <Upload className='size-5 text-muted-foreground'/>
</div>


  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Write Post</DialogTitle>
    </DialogHeader>
    <div className='py-2 flex flex-col gap-y-4'>
        <input className='bg-secondary md:px-2 py-2 px-3 rounded-md outline-none' />
<textarea className='w-full bg-secondary outline-none rounded-md h-44 md:p-2 p-4 resize-none '/>
<div className='flex items-center justify-between'>
<div className='flex items-center gap-2 bg-secondary p-2 rounded-md md:text-base text-sm cursor-pointer'>
 <IoImageOutline className='size-6'/>
 <p>Add Image
    </p>
</div>
<Button variant={"secondary"}>
 <Upload/>   Post
</Button>
</div>
    </div>
  </DialogContent>
</Dialog>


    </div>
  )
}

export default PostUpload