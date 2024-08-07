import React from 'react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <div dir='rtl' className='homebg relative flex  items-center w-full lg:h-[40rem] z-20 md:h-[30rem] xl:h-screen h-[23rem]'>
            
            <div className=' w-full h-full  absolute  bg-[#0202026e]'/>
            <div className='  relative flex flex-col gap-y-2 z-40 px-[26px] lg:px-[90px] xl:px-[130px] 2xl:px-[160px]'>
                <h2 className='text-white text-[24px] lg:text-[40px] font-bold'>حسین کاویانی</h2>
                <h3 className='text-white text-[26px] lg:text-[42px] font-bold'>وکیل پایه یک دادگستری</h3>
                <p className='text-white text-[11px] lg:text-[15px] '>وکیل پایه یک دادگستری متخصص در دعاوی قضایی شامل: زمینه های حقوقی-کیفری-ثبتی و غیره</p> 
                <button className=' w-[40%] relative py-1 mt-3  group lg:py-3 text-white rounded-md border border-[#D4AF37]'>
                    <span className=' w-[0] group-hover:w-[50%] transition-all ease-in  duration-150 h-full absolute left-0 bg-[#D4AF37] top-0'/>
                             <a className=' group-hover:text-black transition-all relative z-20  duration-200 '>مشاهده بیشتر</a>
                      <span className=' w-[0] group-hover:w-[50%] transition-all ease-in duration-150 h-full absolute right-0 bg-[#D4AF37] top-0'/>
                </button>
            </div>
      </div>
    </div>
  )
}
