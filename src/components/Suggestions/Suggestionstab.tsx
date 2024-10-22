import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



interface SkillInterface {
  label: String;
}

function Skill({ label }: SkillInterface) {
  return (
    <div className="text-xs font-light bg-secondary flex items-center rounded-full px-2 py-0.5">
      {label}
    </div>
  );
}

interface SuggestionInterface {
    dp:any;
    name:String;
    email:String;
    skills:any;

}



const Suggestionstab = ({dp,name,email,skills}:SuggestionInterface) => {
  return (
    <div className=" transition ease-in-out flex items-center gap-4 p-2 md:px-4 hover:bg-secondary  rounded-md cursor-pointer md:w-auto w-screen">
      <div className="flex flex-col p-2">
        <div className="flex gap-2 items-center">
          <Avatar className="size-8">
            <AvatarImage src={dp} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <p className="text-sm">{name}</p>

            <p className="text-xs text-muted-foreground">
              {email}
            </p>
          </div>
        </div>
        <div className="pt-2 px-2 flex gap-1">
          <Skill label={skills.s1} />
          <Skill label={skills.s2} />
          <Skill label={skills.s3} />
       
        </div>
      </div>
    </div>
  );
};

export default Suggestionstab;
