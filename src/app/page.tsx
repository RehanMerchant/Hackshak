import PostComponent from "@/components/PostComponent/PostComponent";
import Post from "@/components/PostComponent/post.jpg";
import Post2 from "@/components/PostComponent/gyan.jpg";
export default function Home() {
  return (
   <div className="lg:w-[calc(100vw-220px)]  md:w-[calc(100vw-60px)] w-screen h-72 flex flex-col items-center md:pt-10 px-4 pt-5 ">
<div className="md:w-[650px] w-full h-auto md:gap-y-14 gap-y-8 flex flex-col md:pb-10 pb-20">


<PostComponent postimage={Post} name={"Narendra Modi"} likesno={"456"}  date={"21/9/24"} title={"It is Now Mandatory for all of you now to be Part of LGBTQ+"} desc={"Under the new Section 144/CP all of are now obiliged to be LQBTQ+ Member. Go Rainbow India"}Dp={"https://www.newsonair.gov.in/wp-content/uploads/2024/08/3-Prime-Minister-Narendra-Modi-File-photo.jpeg"}/>


<PostComponent postimage={Post2} name={"AjjTak"} date={"21/9/24"} likesno={"2K"} title={"First Indian to Exit India After LQBTQ+ Section Implemented. "} desc={"Imposement of Section 144/CP, Sugyansil Das Residence of Nasty city Cuttack, Left India. He Said Fuck Rainbow India in his last media interation at Airport"} Dp={"https://images.seeklogo.com/logo-png/53/1/aaj-tak-news-logo-png_seeklogo-534139.png"}/>






</div>
   </div>
  );
}
