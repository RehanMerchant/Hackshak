import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaAngleRight } from "react-icons/fa6";
interface SearchTabInterface{
dp:any;
name:String;
email:String;
}

function SearchTab({dp,name,email}:SearchTabInterface){
  return(
    <div className="rounded-md p-2 flex items-center justify-between hover:bg-secondary py-3 cursor-pointer transition ease-in-out ">
      <div className="flex gap-2 items-center">

    <Avatar className="size-8">
  <AvatarImage src={dp} />
  <AvatarFallback>{name.charAt(0)}</AvatarFallback>
</Avatar>
<div>
  <p className="text-sm">
{name}
  </p>
  <p className="text-xs">
{email}
  </p>
</div>
</div>
<div><FaAngleRight />
  </div>
      </div>
  )

}



const SearchComp = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event:any) => {
      setInputValue(event.target.value);
    };
  return (
    <div className="pt-4">

<input className='outline-none rounded-md w-full  bg-secondary  py-2   px-2 md:px-3' placeholder='Search' value={inputValue} onChange={handleInputChange} />
<div className="pt-5 gap-y-1 flex flex-col">
<SearchTab dp={"https://img.freepik.com/premium-photo/astronaut-alien-planet-hightech-astronaut-from-future_158863-9213.jpg"} name={"Sk Rehan"} email={"skmdrehan432@gmail.com"}/>

<SearchTab dp={"https://media.istockphoto.com/id/1155858136/photo/pride-flag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=LUoYt5TwVenlHOXsNgq1Y9o0AgHwcRkEHJUzpsE4DsI="} name={"Sugyansil Das"} email={"sygansil@gmail.com"}/>




</div>




    </div>
  )
}

export default SearchComp