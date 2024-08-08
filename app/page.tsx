import Aboutus from "@/components/HomePage/aboutus/Aboutus";
import HomePage from "@/components/HomePage/Banner/HomePage";
import Sec3 from "@/components/HomePage/sec3/Sec3";
import Skins from "@/components/HomePage/skins/Skins";
import CommentSec from "@/components/HomePage/CommentSec/CommentSec";
import Essay from "@/components/HomePage/Essay/Essay";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Skins/>
      <Aboutus/>
      <Sec3/>
     <Essay/>
      <CommentSec/>
    </div>
  );
}
