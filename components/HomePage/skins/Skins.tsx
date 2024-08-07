import { SKINPART } from '@/constant'
import React from 'react'
import Image from 'next/image'

export default function Skins() {
  return (
    <div className=' mb-[8rem]'>
       <section className=' flex relative z-20 items-center w-full justify-center -mt-10 '>
            <div className=' w-[329px] md:w-[35rem] lg:w-[55rem] grid grid-cols-2 lg:grid-cols-4 lg:h-[220px] xl:w-[70rem]  justify-items-center items-center  h-[344px] bg-[#F4F8FE] shadow-xl'>
                {SKINPART.map((item  , index)=>(
                    <div className=' flex justify-center items-center flex-col xl:flex-row-reverse xl:gap-x-5 group  gap-2 h-full w-full  lg:px-4' key={index}>
                            <Image src={item.icon} alt='pic' className=' group-hover:scale-90 transition-all ease-in duration-100 w-[4rem]' width={0} height={100}/>
                           <div className='  text-center'>
                            <h1 className=' font-bold xl:text-[30px]'>{item.number}</h1>
                            <h1 className=' font-bold'>{item.titile}</h1>
                           </div>
                    </div>
                ))}
            </div>
       </section>
    </div>
  )
}
