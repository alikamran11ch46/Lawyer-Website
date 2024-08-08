import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className=" w-full  pb-10 flex flex-col px-[2rem] py-10 bg-[#020A25]"
    >
      <div className=" flex  justify-between w-full items-center gap-x-2">
        <div className=" flex  flex-col gap-y-2">
          <div className=" flex items-center  gap-x-2">
            <Image src="/svgicon/logo.svg" alt="pic" width={40} height={100} />
            <h1 className=" text-white text-[25px] lg:text-[20px] font-bold">
              کاویانی
            </h1>
          </div>
          <p className=" text-[#ffffff9f] max-w-[12rem] text-[11px] ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان
          </p>
        </div>
        <div>
          <Image src="/homepic/enamd.png" alt="pic" width={70} height={100} />
        </div>
      </div>

      <div>
        <h1 className=" font-bold text-[25px] text-white mt-10">دسترسی آسان</h1>
        <ul className=" mt-5">
          <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <span className="  w-2 h-2 rounded-full bg-[#B58B03]" />

            <p className=" text-[20px]">تست</p>
          </li>
          <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <span className="  w-2 h-2 rounded-full bg-[#B58B03]" />

            <p className=" text-[20px]">تست</p>
          </li>
          <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <span className="  w-2 h-2 rounded-full bg-[#B58B03]" />

            <p className=" text-[20px]">تست</p>
          </li>
          <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <span className="  w-2 h-2 rounded-full bg-[#B58B03]" />

            <p className=" text-[20px]">تست</p>
          </li>
          <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <span className="  w-2 h-2 rounded-full bg-[#B58B03]" />

            <p className=" text-[20px]">تست</p>
          </li>
        </ul>
      </div>

      <div>
        <h2 className=" font-bold text-[25px] text-white mt-10">
        اطلاعات تماس
        </h2>

        <ul className=" mt-5">
        <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <Image src="/svgicon/phone.svg" alt="pic" width={20} height={100} />

            <p className=" text-[20px]">026-34847474</p>
          </li>
        <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <Image src="/svgicon/phone.svg" alt="pic" width={20} height={100} />

            <p className=" text-[20px]">09223838374</p>
          </li>
        <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <Image src="/svgicon/map.svg" alt="pic" width={20} height={100} />

            <p className=" text-[20px]">تهران - ملاصدرا - خیابان شیراز شمالی - نبش کوچه </p>
          </li>
        </ul>
      </div>

      <div className='mt-5'>
        <div className=" w-full h-1 rounded-full bg-[#ffffff75]"/>
        <p className=" text-[13px] text-center text-[#ffffff75] mt-4">تمامی حقوق وبسایت متعلق به کاویانی میباشد . کپی به هر شکل غیر مجاز است</p>
      </div>
    </footer>
  );
}

