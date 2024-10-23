"use client"
import { Upload } from 'lucide-react'
import React, { useState } from 'react'

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
import TagInput from '../Tag/TagInput';
const PostUpload = () => {


  return (
    <div className='px-2 py-4 bg-background  rounded-md'>



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
        <input placeholder='Your Title goes here...' className='bg-secondary md:px-2 py-2 px-3 rounded-md outline-none' />
<textarea placeholder='Describe here..' className='w-full bg-secondary outline-none rounded-md h-44 md:p-2 p-4 resize-none '/>

<TagInput/>


<div className='flex items-center justify-between'>
<Button variant={"outline"}>
<IoImageOutline className='size-6'/>
 <p>Add Image
    </p>
</Button>


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