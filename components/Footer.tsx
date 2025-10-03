'use client';
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className=" w-full  pb-10 flex flex-col px-[2rem] py-10 bg-[#020A25]"
    >
      <div className=" w-full flex flex-col lg:flex-row lg:justify-between ">
      <div className=" flex  justify-center  items-start">
        <div className=" flex  flex-col items-center gap-y-3 mt-4">
          <div className=" flex items-center justify-center border-4 border-white rounded-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-contain"
              width={250}
              height={180}
            >
              <source src="/bar-logo-animated.mp4" type="video/mp4" />
            </video>
          </div>
          <p className=" text-white text-center text-[16px] lg:text-[20px] font-semibold">
            District Bar Association, TMK
          </p>
        </div>
      </div>

      <div>
        <h1 className=" font-bold text-[25px] text-white mt-10">{t('footer.quickAccess')}</h1>
        <ul className=" mt-5">
          <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <span className="  w-2 h-2 rounded-full bg-[#B58B03]" />
            <a href="https://www.supremecourt.gov.pk" target="_blank" rel="noopener noreferrer" className=" text-[20px] hover:text-[#D4AF37] transition-colors">Supreme Court of Pakistan</a>
          </li>
          <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <span className="  w-2 h-2 rounded-full bg-[#B58B03]" />
            <a href="https://www.shc.gov.pk" target="_blank" rel="noopener noreferrer" className=" text-[20px] hover:text-[#D4AF37] transition-colors">High Court of Sindh</a>
          </li>
          <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <span className="  w-2 h-2 rounded-full bg-[#B58B03]" />
            <a href="https://www.pakistanbarcouncil.org" target="_blank" rel="noopener noreferrer" className=" text-[20px] hover:text-[#D4AF37] transition-colors">Pakistan Bar Council</a>
          </li>
          <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <span className="  w-2 h-2 rounded-full bg-[#B58B03]" />
            <a href="https://sindhbarcouncil.org/" target="_blank" rel="noopener noreferrer" className=" text-[20px] hover:text-[#D4AF37] transition-colors">Sindh Bar Council</a>
          </li>
          <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <span className="  w-2 h-2 rounded-full bg-[#B58B03]" />
            <a href="https://sja.gos.pk/" target="_blank" rel="noopener noreferrer" className=" text-[20px] hover:text-[#D4AF37] transition-colors">Sindh Judicial Academy</a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className=" font-bold text-[25px] text-white mt-10">
        {t('footer.contact')}
        </h2>

        <ul className=" mt-5">
        <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <Image src="/phone-new.png" alt="phone" width={20} height={20} />
            <p className=" text-[20px]">02233-12345</p>
          </li>
        <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <Image src="/phone-new.png" alt="phone" width={20} height={20} />
            <p className=" text-[20px]">09223838374</p>
          </li>
        <li className=" relative flex items-center  gap-x-2 mb-2 text-white">
            <Image src="/svgicon/map.svg" alt="pic" width={20} height={100} />

            <p className=" text-[20px]">District Bar Association Judicial Complex, Tando Muhammad Khan.</p>
          </li>
        </ul>
      </div>
      </div>
     

      <div className='mt-5'>
        <div className=" w-full h-1 rounded-full bg-[#ffffff75]"/>
        <p className=" text-[13px] text-center text-[#ffffff75] mt-4">Copyright © 2025 <span className="text-orange-500">Lyceumerce TMK</span>. All rights reserved. | Powered by <span className="text-orange-500">SohMin</span></p>
      </div>
    </footer>
  );
}
