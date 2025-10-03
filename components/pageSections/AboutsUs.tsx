import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutsUs() {
  return (
    <div className=" mb-20">
      <div
                className="aboutbg relative flex  items-center w-full  z-20 md:h-[30rem]  h-[23rem]"
      >
        <div className=" w-full h-full  absolute  bg-[#0202026e]" />
        <div className=" relative px-5 lg:px-20  xl:px-32 mt-20 z-40">
          <h1 className="  text-white font-bold mb-3 text-[34px] lg:text-[54px]">
            About Us
          </h1>
          <p className="  text-white font-bold underline">
            Home {" >"} About Us
          </p>
        </div>
      </div>

      <div className=" w-full flex justify-center  relative z-20 mt-10 ">
        <div className=" flex flex-col md:flex-row w-full md:items-center md:justify-center px-4 lg:px-8 ">
          <section className=" flex justify-center mb-20 flex-col items-center gap-y-20">
            <div className=" relative">
              <Image
                alt="DBA President"
                width={400}
                height={500}
                className=" w-[15rem] lg:w-[20rem] rounded-lg shadow-2xl border-4 border-white ring-4 ring-[#D4AF37] object-cover"
                src="/dba-president.jpg"
              />
              <div className=" absolute  -bottom-4 -right-4 w-[15rem] h-[20rem] lg:h-[26rem] lg:w-[19rem] -z-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg shadow-lg"></div>
            </div>
          </section>
          <section>
            <div className=" px-6 md:max-w-[25rem] lg:max-w-[35rem] mr-4 xl:max-w-[45rem]">
              <p className=" inline-block font-bold py-2 px-2 mb-6 border-l-4  border-[#D4AF37]   text-[#D4AF37] text-lg">About Us</p>
              <p className=" font-bold mb-6 text-lg leading-relaxed">The District Bar Association Tando Muhammad Khan was founded by Mr. Abdul Hakeem Memon, a respected lawyer and former Member of the Provincial Assembly. He also served as the President of the Association, playing a pivotal role in strengthening the legal community and advocating for justice in the region.</p>
              <p className=" font-bold mb-6 text-lg leading-relaxed">With years of legal expertise, we provide trusted services in criminal, civil, commercial, and family law. Our client-focused approach ensures personalized strategies and strong representation to protect your rights and achieve the best possible outcomes.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
