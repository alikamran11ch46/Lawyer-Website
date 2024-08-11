import React from 'react'
import Image from 'next/image'
import { SEC5 } from '@/constant'
import Button from '../Button'
import BannerMaker from '../BannerMaker'


export default function Essay() {
  return (
    <div className=' mb-20'>
      <BannerMaker title='مقالات' banner='essbg'/>

      <section>
        <div dir="rtl" className=" w-full grid   grid-cols-1 justify-items-center  md:grid-cols-2 gap-y-10  lg:grid-cols-3  mt-20">
            {SEC5.map((item , index)=>(
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
  )
}
