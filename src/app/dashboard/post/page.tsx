import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import Post from '@/components/PostComponent/Post1.png'
import Post2 from '@/components/PostComponent/Post2.jpg'
import Post3 from '@/components/PostComponent/Post3.png'

const DashboardPost = () => {



  
  return (
    <div className="lg:w-[calc(100vw-300px)] pb-10  md:w-[calc(100vw-130px)]  w-[calc(100vw-40px)]">

<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Post</TableHead>
      <TableHead>Title</TableHead>
      <TableHead className="text-center">Views</TableHead>
      <TableHead className="text-center">Likes</TableHead>
      <TableHead className="text-center">Status</TableHead>
      <TableHead className="text-right">Date</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>

    <TableRow>
      <TableCell>
        <Image src={Post} alt="image" />
      </TableCell>
      <TableCell className="truncate w-[50px]">Javascript Complete Roa...</TableCell>
      <TableCell  className="text-center">412</TableCell>
      <TableHead className="text-center">12</TableHead>
      <TableHead className="text-center text-green-600">OK</TableHead>
      <TableCell className="text-right">21/08/21</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <Image src={Post2} alt="image" />
      </TableCell>
      <TableCell className="truncate w-[50px]">Master Git and Github...</TableCell>
      <TableCell  className="text-center">2K</TableCell>
      <TableHead className="text-center">423</TableHead>
      <TableHead className="text-center text-green-600">OK</TableHead>
      <TableCell className="text-right">22/08/21</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <Image src={Post3} alt="image" />
      </TableCell>
      <TableCell className="truncate w-[50px]">System Design course for Beg...</TableCell>
      <TableCell  className="text-center">4.4K</TableCell>
      <TableHead className="text-center">1.2K</TableHead>
      <TableHead className="text-center text-red-600">REMOVED</TableHead>
      <TableCell className="text-right">25/08/21</TableCell>
    </TableRow>


    <TableRow>
      <TableCell>
        <Image src={Post} alt="image" />
      </TableCell>
      <TableCell className="truncate w-[50px]">Javascript Complete Roa...</TableCell>
      <TableCell  className="text-center">412</TableCell>
      <TableHead className="text-center">12</TableHead>
      <TableHead className="text-center text-green-600">OK</TableHead>
      <TableCell className="text-right">21/08/21</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <Image src={Post2} alt="image" />
      </TableCell>
      <TableCell className="truncate w-[50px]">Master Git and Github...</TableCell>
      <TableCell  className="text-center">2K</TableCell>
      <TableHead className="text-center">423</TableHead>
      <TableHead className="text-center text-green-600">OK</TableHead>
      <TableCell className="text-right">22/08/21</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <Image src={Post3} alt="image" />
      </TableCell>
      <TableCell className="truncate w-[50px]">System Design course for Beg...</TableCell>
      <TableCell  className="text-center">4.4K</TableCell>
      <TableHead className="text-center">1.2K</TableHead>
      <TableHead className="text-center text-yellow-600">WARN</TableHead>
      <TableCell className="text-right">25/08/21</TableCell>
    </TableRow>


   












    


  </TableBody>
</Table>


    </div>
  )
}

export default DashboardPost