"use client";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Theme/ThemTooglerButton";
import { FaGithub } from "react-icons/fa";
import Login from "./Login";
import Signup from "./Signup";
import Image from "next/image";
import Art from "@/asset/item.jpg";
const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="h-auto pt-14 flex flex-col justify-center items-center">
      <div className="absolute top-2 right-2 p-2">
        <ModeToggle />
      </div>
      <div className="flex gap-4">
       <div className="hidden md:flex  h-[600px] ">
        <Image src={Art} className="object-contain" alt="Item"/>
       </div>
        <div className="gap-2 flex flex-col">
          <div className="flex gap-1 w-full justify-center items-center py-2">
            <AiFillCode className="size-10" />
            <p className="font-medium font-mono md:text-3xl text-2xl">
              Hackshak
            </p>
          </div>
          <div className="border rounded-md h-auto w-[300px] md:w-[340px] p-4 py-6">
            <div>
              {login ? <Login /> : <Signup />}

              <div className=" flex flex-col justify-between items-center relative">
                <p className="py-4    text-sm bg-background px-2 z-50">OR</p>
                <div className=" h-[1px] absolute left-0 mt-6  bg-neutral-300 w-full" />
                <Button
                  variant={"secondary"}
                  className="w-full hover:opacity-90"
                >
                  <FcGoogle />
                  Google
                </Button>
                <Button
                  variant={"secondary"}
                  className="w-full mt-4  hover:opacity-90"
                >
                  <FaGithub />
                  Github
                </Button>
              </div>
            </div>
          </div>

          <div className="border flex justify-center rounded-md items-center h-auto w-[300px] md:w-[340px] p-3">
            {login ? (
              <div className="flex">
                <p className="text-sm">Don't have an Account?</p>
                <span
                  onClick={() => {
                    setLogin(false);
                  }}
                  className="text-sm ml-1 text-blue-500 underline hover:text-blue-700 cursor-pointer"
                >
                 
                  Create Now
                </span>
              </div>
            ) : (
              <div className="flex">
                <p className="text-sm">Already have an Account?</p>
                <span
                  onClick={() => {
                    setLogin(true);
                  }}
                  className="text-sm ml-1 text-blue-500 underline hover:text-blue-700 cursor-pointer"
                >
              
                  Login Now
                </span>
              </div>
            )}
          </div>
        </div>
       </div>
       <div className="mt-10 text-center px-10 text-xs pb-4">
        By Clicking {login ? ' Login' : ' Sign up'}, you agree to our <span className="text-blue-500 cursor-pointer underline hover:text-blue-700">
          Terms of Service </span> and that you have read our <span className="text-blue-500 cursor-pointer underline hover:text-blue-700"> Privacy Policy </span>
       </div>
    </div>
  );
};

export default AuthPage;
