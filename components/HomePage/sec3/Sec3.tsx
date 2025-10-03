import React from "react";
import Image from "next/image";
import { SEC3 } from "@/constant";

export default function Sec3() {
  return (
    <div className=" mt-20 px-4 md:px-8">
      <section className="relative w-full h-[65rem] md:h-[411px] lg:h-[500px] xl:h-[620px] 2xl:h-[760px] bg-[#040F35] px-[33px] py-[22px] rounded-3xl border-8 border-[#D4AF37] shadow-2xl overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-[#D4AF37] rounded-tl-2xl"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-[#D4AF37] rounded-tr-2xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-[#D4AF37] rounded-bl-2xl"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-[#D4AF37] rounded-br-2xl"></div>

        {/* Inner decorative border */}
        <div className="absolute inset-4 border-2 border-[#D4AF37] border-opacity-50 rounded-2xl pointer-events-none"></div>
        <div className=" w-full h-full  relative md:hidden">
          <div className=" absolute w-full h-full">
            <Image
              src="/justice-lady.png"
              alt="Justice Lady"
              className="  w-full  h-full object-cover opacity-60"
              width={300}
              height={200}
            />
          </div>
          <div className=" w-full  flex flex-col justify-center items-center h-full  text-[16px] font-bold ">
            <h1 className=" text-white mb-10 mt-10 text-[17px]">What Services Do You Receive From Us</h1>
                <div className=" grid grid-cols-1 justify-items-center ">
                    {SEC3.map((item , index)=>(
                        <div  key={index} className=" w-[12rem] h-[12rem] mb-5 rounded-[25px] flex justify-center items-center flex-col gap-y-2 border-4 border-[#D4AF37] shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-2 ring-[#D4AF37] ring-opacity-50">
                        <Image src='/svgicon/sec3.png' alt="" className=" w-[5rem]" width={100} height={100}/>
                        <p className=" font-bold text-[20px]">{item.title}</p>
                        <button className=" px-6 py-2 shadow-lg">
                        Consultation
                        </button>
                    </div>
                    ))}

                </div>
          </div>

        </div>
        <div className=" w-full h-full  hidden relative md:block">
          <div className=" absolute w-full h-full">
            <Image
              src="/justice-lady.png"
              alt="Justice Lady"
              className="  w-full  h-full object-cover opacity-60"
              fill
            />
          </div>
          <div className=" w-full  flex flex-col justify-center items-center h-full  text-[16px] font-bold ">
            <h1 className=" text-white mb-10 relative z-50 mt-10 text-[17px]  xl:text-[50px]">What Services Do You Receive From Us</h1>
                <div className=" grid grid-cols-1  z-20 justify-items-center md:grid-cols-4 md:gap-x-4 lg:gap-x-5 xl:gap-x-10 ">
                    {SEC3.map((item , index)=>(
                        <div  key={index} className="relative z-20 w-[12rem]   md:w-[9rem] lg:w-[12rem] xl:w-[15rem] xl:h-[16rem] 2xl:w-[18rem] h-[12rem] mb-5 rounded-[25px] flex justify-center items-center flex-col gap-y-2 xl:gap-y-5 border-4 border-[#D4AF37] shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-2 ring-[#D4AF37] ring-opacity-50">
                        <Image src='/svgicon/sec3.png' alt="" className=" w-[5rem]" width={100} height={100}/>
                        <p className=" font-bold text-[20px] md:text-[15px] 2xl:text-[30px]">{item.title}</p>
                        <button className=" px-6 py-2 shadow-lg  xl:px-10">
                        Consultation
                        </button>
                    </div>
                    ))}
                </div>
          </div>

        </div>
      </section>
    </div>
  );
}
