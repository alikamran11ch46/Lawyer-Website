import React from "react";
import Image from "next/image";
import { NAVBAR } from "@/constant";


export default function Navbar() {
  return (
    <div className=" relative">
      <nav className=" absolute z-50 w-full px-[26px] lg:px-[90px] xl:px-[130px] 2xl:px-[160px] flex justify-between h-[4rem] bg-[#020202be]">
        <div className=" flex  items-center gap-x-6 lg:hidden">
          <Image src="/svgicon/menu.svg" alt="pic" width={30} height={100} />
          <button className=" text-white py-2 px-5 text-[13px] bg-[#8b8b8b5f] rounded-[10px]">درخواست مشاوره</button>
        </div>
        <div className=" lg:flex gap-x-4  hidden items-center flex-row-reverse">
            <div className=" text-white  text-center ">
                <p>+98  9946871425</p>
                <p>تلفن تماس</p>
            </div>
            <hr className=" w-[1px] h-full bg-white opacity-15" />
            <div className=" text-white  text-center ">
                <p>8:00 - 20:00</p>
                <p>ساعت کاری</p>
            </div>
        </div>
        <div className=" flex  items-center gap-x-2">
          <h1 className=" text-white text-[15px] lg:text-[20px] font-bold">کاویانی</h1>
          <Image src="/svgicon/logo.svg" alt="pic" width={30} height={100} />
        </div>
      </nav>

      <div className=" w-full lg:flex hidden justify-center relative">
        <div className=" absolute top-20  z-40  w-[78vw] h-[2.7rem]">
          <div className=" w-full absolute bottom-0 bg-white h-[0.35rem] rounded-full"/>
             <ul dir="rtl" className=" flex gap-x-10  pt-[11.5px] px-4 text-white whitespace-nowrap">
                {NAVBAR.map((i , index)=>(
                  <li className="  hover:border-b-[0.35rem] transition-all cursor-pointer ease-in  relative z-30 border-[#e6ba29] text-[17px]">
                    {i.title}
                  </li>
                ))}
                
             </ul>
             <button className=" -top-2 absolute text-white py-2 px-5 text-[13px] bg-[#8b8b8b5f] rounded-[10px]">درخواست مشاوره</button>

        </div>
      </div>
    </div>
  );
}
