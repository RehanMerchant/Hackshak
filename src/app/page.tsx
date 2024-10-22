import PostComponent from "@/components/PostComponent/PostComponent";
import Post from "@/components/PostComponent/Post1.png";
import Post2 from "@/components/PostComponent/Post2.jpg";
import Post3 from "@/components/PostComponent/Post3.png";
import PostUpload from "@/components/PostUploadCOmponent/PostUpload";
export default function Home() {
  return (
   <div className="lg:w-[calc(100vw-220px)]  md:w-[calc(100vw-60px)] w-screen  flex flex-col items-center md:pt-6 px-4 pt-2 ">

<div className="md:w-[650px] w-full pb-4">

<PostUpload/>
</div>
    
<div className="md:w-[650px] w-full h-auto  gap-y-8 flex flex-col md:pb-10 pb-20">


<PostComponent views={'2.9K'} postimage={Post} name={"Geeks for Geek"} likesno={"1.1K"}  date={"3 Hours ago"} title={"Javascript Complete Roadmap for Beginners."} desc={"Join our free bootcamp for javascript from strach for beginners to experts."}Dp={"https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64"}/>


<PostComponent views={'3.2K'} postimage={Post2} name={"FreeCodeCamp"} date={"16 Hours ago"} likesno={"1.8K"} title={"Master Git and Github - Beginner to Advance"} desc={"Checkout our Free Git and Github Mastery video in Youtube."} Dp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s"}/>


<PostComponent views={'1.6K'} postimage={Post3} name={"Edureka"} date={"A Day ago"} likesno={"998"} title={"System Design course for Beginner"} desc={"Start Exploring the vast System design Subject with the first step, Click Now!!"} Dp={"https://yt3.googleusercontent.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s900-c-k-c0x00ffffff-no-rj"}/>


<PostComponent views={'2.9K'} postimage={Post} name={"Geeks for Geek"} likesno={"1.1K"}  date={"3 Hours ago"} title={"Javascript Complete Roadmap for Beginners."} desc={"Join our free bootcamp for javascript from strach for beginners to experts."}Dp={"https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64"}/>

<PostComponent views={'1.6K'} postimage={Post3} name={"Edureka"} date={"A Day ago"} likesno={"998"} title={"System Design course for Beginner"} desc={"Start Exploring the vast System design Subject with the first step, Click Now!!"} Dp={"https://yt3.googleusercontent.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s900-c-k-c0x00ffffff-no-rj"}/>


<PostComponent views={'3.2K'} postimage={Post2} name={"FreeCodeCamp"} date={"16 Hours ago"} likesno={"1.8K"} title={"Master Git and Github - Beginner to Advance"} desc={"Checkout our Free Git and Github Mastery video in Youtube."} Dp={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s"}/>

</div>
   </div>
  );
}
