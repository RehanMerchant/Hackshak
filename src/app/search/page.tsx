"use client"
import Suggestionstab from '@/components/Suggestions/Suggestionstab'
import React, { useState } from 'react'


const SearchPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='flex flex-col'>
<div className='flex fixed z-50 bg-background  md:pt-10 md:pl-10'>
  <input className='md:w-[300px] outline-none md:rounded-md  bg-secondary w-screen py-2   px-2 md:px-3' placeholder='Search' value={inputValue} onChange={handleInputChange} />
</div>
{
  inputValue.length > 0 ? null : 


<div className='md:p-10 md:pt-24 pt-14'>
<p className='text-lg p-2 md:text-xl'>Suggestions
  </p>
 <div className='grid md:grid-cols-3  pb-6 gap-6 gap-y-2 md:gap-y-8'>


<Suggestionstab dp={"https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png"} name={"Aryaman Puhan"} email={"aryaman@gmail.com"} skills={{"s1":"Frontend", "s2":"NextJS", "s3":"React"}} />

<Suggestionstab dp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtmvAKv9hc8SBhCGsuSrOeilGEY4x_ceWkA&s"} name={"Omm Prakash"} email={"ommprakash@gmail.com"} skills={{"s1":"SQL", "s2":"Database", "s3":"Casandra"}} />

<Suggestionstab dp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzDERxdtdtxwhZu5x6VYj9vut9fJzq_h2u6g&s"} name={"Shenasis Mallick"} email={"shenasis@gmail.com"} skills={{"s1":"Backend", "s2":"Python", "s3":"Danjo"}} />

<Suggestionstab dp={"https://m.media-amazon.com/images/I/71b72jRreGL._AC_UF1000,1000_QL80_.jpg"} name={"Sugyansil Das"} email={"sugyansil@gmail.com"} skills={{"s1":"Spring", "s2":"Backend", "s3":"MVC"}} />


<Suggestionstab dp={"https://img.freepik.com/premium-photo/astronaut-alien-planet-hightech-astronaut-from-future_158863-9213.jpg"} name={"Rehan"} email={"skrehan@gmail.com"} skills={{"s1":"Devops", "s2":"Cloud", "s3":"AWS"}} />


<Suggestionstab dp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhx5iEmqbKnzI3TPjJpLFhncfHFjYsYvgjDA&s"} name={"PVR Raghav"} email={"raghav@gmail.com"} skills={{"s1":"Stack", "s2":"Typescript", "s3":"React"}} />


<Suggestionstab dp={"https://m.media-amazon.com/images/I/61+jGc7vLIL.jpg"} name={"Sai"} email={"sai@gmail.com"} skills={{"s1":"Architech", "s2":"Stack", "s3":"Git"}} />


  </div>
</div>

}


    </div>
  )
}

export default SearchPage