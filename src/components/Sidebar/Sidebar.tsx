import { Bell, Compass, Home, MessageCircle, Search } from "lucide-react";
import React from "react";
import { AiFillCode } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="lg:w-[220px] items-center w-screen h-[50px] md:relative fixed bottom-0 left-0 md:left-0 md:top-0 md:w-[60px] md:h-[100vh] bg-background md:border-r-2 border-t-2 flex md:flex-col">
      <div className="w-full  py-10 md:flex hidden items-center justify-center">
        <AiFillCode className="size-8" />
        <p className="font-medium ml-2 font-mono md:hidden lg:flex text-2xl">
          Hackshak
        </p>
      </div>
      <div className="w-full px-5  ">
        
       <ul className="flex md:flex-col justify-between lg:gap-y-3 md:gap-y-8 ">
        <li className="lg:py-2 text-primary flex gap-2 cursor-pointer">
        <Home className="size-6 shrink-0"/> <p className="lg:flex hidden text-lg">Home</p> 
        </li>
        <li className="lg:py-2 text-primary flex gap-2 cursor-pointer">
        <Search className="size-6 shrink-0 "/> <p className="lg:flex hidden text-lg">Search</p> 
        </li>
        <li className="lg:py-2 text-primary flex gap-2 cursor-pointer">
        <Compass className="size-6 shrink-0 "/> <p className="lg:flex hidden text-lg">Explore</p> 
        </li>
        <li className="lg:py-2 text-primary flex gap-2 cursor-pointer">
        <Bell className="size-6 shrink-0 "/> <p className="lg:flex hidden text-lg">Notification</p> 
        </li>
        <li className="lg:py-2 text-primary flex gap-2 cursor-pointer">
        <MessageCircle className="size-6 shrink-0 "/> <p className="lg:flex hidden text-lg">Messages</p> 
        </li>
        </ul>
        </div>
    </div>
  );
};

export default Sidebar;
