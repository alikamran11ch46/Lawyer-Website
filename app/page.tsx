import Aboutus from "@/components/HomePage/aboutus/Aboutus";
import HomePage from "@/components/HomePage/Banner/HomePage";
import Sec3 from "@/components/HomePage/sec3/Sec3";
import Skins from "@/components/HomePage/skins/Skins";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Skins/>
      <Aboutus/>
      <Sec3/>
    </div>
  );
}
