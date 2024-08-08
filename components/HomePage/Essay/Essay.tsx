import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { SEC4 } from "@/constant";

export default function Essay() {
  return (
    <div className=" mb-20">
      <section className=" w-full mt-[180px]">
        <div dir="rtl" className=" px-20 flex  justify-between items-center">
          <div>
            <p className=" h-[2.5rem] w-[5rem] font-bold py-2 px-2  border-r-4  border-[#D4AF37]   text-[#D4AF37]">
              بلاگ
            </p>
            <h4 className=" text-[30px] font-bold">بروزترین مقالات</h4>
          </div>
          <button className=" hidden md:block px-10 py-2 bg-[#d4af37af] border">
            مشاهده بیشتر
          </button>
        </div>

        <div dir="rtl" className=" w-full grid   grid-cols-1 justify-items-center  md:grid-cols-2 gap-y-10  lg:grid-cols-3  mt-20">
            {SEC4.map((item , index)=>(
                <div key={index} className=" w-[350px] lg:w-[310px] xl:w-[350px] 2xl:w-[450px] hover:shadow-2xl transition-all flex flex-col items-center  gap-y-2 ease-in duration-150  pb-5">
                <Image src={item.pic} alt="pic" className=" w-full" width={300} height={400}/>
                <p className=" text-[#676767] text-[20px]">۱۴۰۳/۱۲/۰۶</p>
                <p className=" text-[24px] font-bold">حکم خیانت زن به شوهر </p>
                <p dir="rtl" className=" px-2 mr-5 mt-4">به طور کلی خیانت، تجربه‌ ای دردناک و ویرانگر است که می‌تواند  خانواده را متزلزل  کند و روی تمامی ابعاد آن اثر مخرب دارد. در این میان، خیانت زن به شوهر</p>
                <div className=" w-full text-center">
                <Button style="text-black"/>

                </div>
            </div>
            ))}
            
            
        </div>
      </section>
    </div>
  );
}
