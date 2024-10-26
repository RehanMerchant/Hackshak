import { FaArrowUp } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const DashboardHome = () => {
  return (
    <div className="lg:w-[calc(100vw-300px)] pb-10  md:w-[calc(100vw-130px)]  w-[calc(100vw-40px)]">
      <div className="lg:flex gap-4 grid  ">
        <div className="bg-secondary md:w-[350px] w-full p-5 rounded-md h-fit">
          <p className="text-3xl">2.3K+</p>

          <p className="text-muted-foreground flex gap-1 items-center">
            Engagement this Month{" "}
            <FaArrowUp className="text-green-600 size-4" />
          </p>
          <div className="mt-1.5 mb-1.5 h-[1px] w-full bg-muted-foreground" />
          <div className="pt-1 flex flex-col gap-1">
            <p>People Interacted:</p>
            <div className="flex mt-1 gap-4">
              <p className="text-sm flex items-center gap-1">
                23 Follower <FaArrowUp className="text-green-600" />
              </p>
              <p className="text-sm flex items-center gap-1">
                867 Likes <FaArrowUp className="text-green-600" />
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondary md:w-[350px] w-full p-5 rounded-md  md:mt-0 mt-4">
          <p>Recently Followed</p>

       


          <div className="py-2 px-2 mt-2 bg-neutral-900 flex rounded-md hover:opacity-80 cursor-pointer  gap-2">
            <Avatar className="size-9">
              <AvatarImage src="https://m.media-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_.jpg" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">Steven Spielberg</p>
              <p className="text-xs text-muted-foreground">
                I Wrote Schindler's List and Jurrasic P...
              </p>
            </div>
          </div>

          <div className="py-2 px-2 mt-2 bg-neutral-900 flex rounded-md hover:opacity-80 cursor-pointer  gap-2">
            <Avatar className="size-9">
              <AvatarImage src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBMUYNtWuZC1DukwC21Lpq-1BiDN1iOWQqw4mxCGZnZ-DAuwxj" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">Satyajit Ray</p>
              <p className="text-xs text-muted-foreground">
              Pather Panchali to World of Apu are Mine..
              </p>
            </div>
          </div>

          <div className="py-2 px-2 mt-2 bg-neutral-900 flex rounded-md hover:opacity-80 cursor-pointer  gap-2">
            <Avatar className="size-9">
              <AvatarImage src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRxOpabp3sPlVWOqEf94Nz0_k_qxtmt-ADzCnhuRFWF3f48St93QhC0lq99wLBWdkAYBrzZtVM35w9ql3g" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">Martin Scorsese</p>
              <p className="text-xs text-muted-foreground">
                Vito Carleon to Jordan Belfort are mine..
              </p>
            </div>
          </div>

          <div className="py-2 px-2 mt-2 bg-neutral-900 flex rounded-md hover:opacity-80 cursor-pointer  gap-2">
            <Avatar className="size-9">
              <AvatarImage src="https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">You exactly know who i Am</p>
              <p className="text-xs text-muted-foreground">
               Say My Name..
              </p>
            </div>
          </div>

<div className="mt-4">
 <Button variant={"outline"}>
  More
 </Button>
</div>

        </div>


       
        <div className="border-2  md:w-[450px] w-full py-3 px-2 rounded-md h-fit  md:mt-0 mt-4">
        <p className="pb-2 pl-2 ">
          Discover
        </p>
        <iframe className="w-full h-56"    
src="https://www.youtube.com/embed/O5hShUO6wxs">   
</iframe>  
<div className="pt-2">

<p className="text-muted-foreground">Version 2 is on its wayyy!! Keep tight.</p>
  </div>


        </div>



      </div>
    </div>
  );
};

export default DashboardHome;
