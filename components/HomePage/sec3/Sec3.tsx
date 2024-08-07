import React from "react";
import Image from "next/image";
import { SEC3 } from "@/constant";

export default function Sec3() {
  return (
    <div className=" mt-20">
      <section className="  w-full h-[65rem] md:h-[411px] lg:h-[500px] xl:h-[620px] 2xl:h-[760px] bg-[#040F35]  px-[33px] py-[22px]">
        <div className=" w-full h-full  relative md:hidden">
          <div className=" absolute w-full h-full">
            <Image
              src="/homepic/mobileframe.png"
              alt="pic"
              className="  w-full  h-full  "
              width={300}
              height={200}
            />
          </div>
          <div className=" w-full  flex flex-col justify-center items-center h-full  text-[16px] font-bold ">
            <h1 className=" text-white mb-10 mt-10 text-[17px]">از ما چه خدماتی دریافت میکنید</h1>
                <div className=" grid grid-cols-1 justify-items-center ">
                    {SEC3.map((item , index)=>(
                        <div  key={index} className=" w-[12rem] h-[12rem] mb-5 rounded-[25px] flex justify-center items-center flex-col gap-y-2 border-b-[10px] border-[#B58B03] bg-white">
                        <Image src='/svgicon/sec3.png' alt="" className=" w-[5rem]" width={100} height={100}/>
                        <p className=" font-bold text-[20px]">{item.title}</p>
                        <button className=" px-6 py-2 shadow-lg">
                        مشاوره
                        </button>
                    </div>
                    ))}
                    
                </div>
          </div>
          
        </div>
        <div className=" w-full h-full  hidden relative md:block">
          <div className=" absolute w-full h-full">
            <Image
              src="/homepic/frame.png"
              alt="pic"
              className="  w-full  h-full  "
              fill
            />
          </div>
          <div className=" w-full  flex flex-col justify-center items-center h-full  text-[16px] font-bold ">
            <h1 className=" text-white mb-10 relative z-50 mt-10 text-[17px]  xl:text-[50px]">از ما چه خدماتی دریافت میکنید</h1>
                <div className=" grid grid-cols-1  z-20 justify-items-center md:grid-cols-4 md:gap-x-4 lg:gap-x-5 xl:gap-x-10 ">
                    {SEC3.map((item , index)=>(
                        <div  key={index} className="relative z-20 w-[12rem]   md:w-[9rem] lg:w-[12rem] xl:w-[15rem] xl:h-[16rem] 2xl:w-[18rem] h-[12rem] mb-5 rounded-[25px] flex justify-center items-center flex-col gap-y-2 xl:gap-y-5 border-b-[10px] border-[#B58B03] bg-[#fffffff1]">
                        <Image src='/svgicon/sec3.png' alt="" className=" w-[5rem]" width={100} height={100}/>
                        <p className=" font-bold text-[20px] md:text-[15px] 2xl:text-[30px]">{item.title}</p>
                        <button className=" px-6 py-2 shadow-lg  xl:px-10">
                        مشاوره
                        </button>
                    </div>
                    ))}
                     <Image src='/homepic/women.png' alt="" className=" -z-10 left-0 top-0   absolute lg:w-[38rem] md:w-[31rem] xl:w-[48rem] 2xl:w-[60rem]" width={1000} height={100}/>
                </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
