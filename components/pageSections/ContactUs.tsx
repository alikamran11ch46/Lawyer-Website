import React from "react";
import Image from "next/image";
import { CONTACT } from "@/constant";

export default function ContactUs() {
  return (
    <div className=" mb-20">
      <div
        className="aboutbg relative flex  items-center w-full  z-20 md:h-[30rem]  h-[23rem]"
      >
        <div className=" w-full h-full  absolute  bg-[#0202026e]" />
        <div className=" relative px-5 lg:px-20  xl:px-32 mt-20 z-40">
          <h1 className="  text-white font-bold mb-3 text-[34px] lg:text-[54px]">
            Contact Us
          </h1>
          <p className="  text-white font-bold underline">
            Home {" >"} Contact Us
          </p>
        </div>
      </div>

      <div className=" w-full flex justify-center relative z-20 -mt-16">
        <div className=" w-[20rem]  md:w-[45rem] flex flex-row xl:w-[60rem] p-3 lg:w-[55rem]  shadow-2xl bg-[#131D42]">
          <div className=" w-full border-[4px] flex  flex-col md:flex-row  md:justify-between p-3 h-full border-[#D4AF37]">
            <Image
              src="/homepic/location-dba.png"
              className=" w-full md:w-[20rem] xl:w-[25rem] "
              alt="Tando Muhammad Khan Location Map"
              width={400}
              height={200}
            />

            <div>
            {CONTACT.map((item, index) => (
              <div
                key={index}
                className=" w-full  mt-5 flex flex-col md:flex-row md:justify-start xl:mb-10 md:gap-x-2 justify-center items-center gap-y-2 text-white"
              >
                <div className=" w-[3rem] rounded-full h-[3rem] xl:w-[4rem] xl:h-[4rem] bg-white flex justify-center items-center">
                  <Image
                    src={item.pic}
                    className=" w-[1.5rem] "
                    alt="pic"
                    width={20}
                    height={20}
                  />
                </div>
                <p  className=" text-[13px] md:text-base xl:text-[20px] ">{item.title}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>


      <div className=" flex w-full justify-center flex-col items-center mt-24">
        <div   className=" mb-5">
        <p className=' h-[2.5rem] w-[5rem] font-bold py-2 px-2  border-l-4  border-[#D4AF37]   text-[#D4AF37]'>Consultation</p>
        <h1 className=' text-[32px] mb-4 font-bold'>Request Submission Form</h1>
        </div>
        <form  className=" flex flex-col  md:flex-row md:gap-x-5">
            <div className=" flex flex-col gap-y-4">
                <input type="text"  className=" w-[20rem]  xl:w-[30rem] border-[2px] py-4 px-2 border-[#d4af379f]" placeholder="Full Name"/>
                <input type="email"  className=" w-[20rem] xl:w-[30rem]  border-[2px] py-3 px-2 border-[#d4af379f]" placeholder="Email Address"/>
                <input type="tel"  className=" w-[20rem]  xl:w-[30rem] border-[2px] py-3 px-2 border-[#d4af379f]" placeholder="Phone Number"/>
                <input type="text"  className=" w-[20rem]  xl:w-[30rem] border-[2px] py-3 px-2 border-[#d4af379f]" placeholder="Subject"/>
            </div>
            <div  className=" flex  flex-col  mt-5 md:mt-0 gap-y-4">
                <textarea name="" className=" w-[20rem] xl:w-[30rem] py-3 px-2 border-[2px] border-[#d4af379f]  h-full" placeholder="Description" id=""/>
                <button className=" w-full  py-4 text-white bg-[#131d42d2]">Submit Request</button>
            </div>
        </form>
      </div>
    </div>
  );
}
