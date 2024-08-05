import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav className=" absolute z-50 w-full px-[26px] lg:px-[90px] flex justify-between h-[4rem] bg-[#020202be]">
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
    </div>
  );
}
