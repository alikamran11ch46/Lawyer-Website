import React from 'react'
import Image from 'next/image'

export default function CommentSec() {
  return (
    <section className=' relative w-full h-[20rem] mb-[20rem] md:mb-20 '>
        <div>
                <Image src='/svgicon/quote.svg' className=' absolute left-[8rem] -z-10 -bottom-10' alt='pic' width={270} height={100}/>
                <Image src='/svgicon/quote.svg' className=' absolute right-[8rem]' alt='pic' width={270} height={100}/>

                <div className=' flex flex-col  w-full  md:flex-row justify-center gap-10  pt-20 relative z-50 items-center'>
                    <div className=' w-[350px] md:w-[450px] xl:w-[550px] h-[13rem] p-3 rounded-[10px] bg-[#040F35]'>
                        <div className=' w-full h-full rounded-[5px] border-2 p-3 border-[#D4AF37]'>
                            <div className=' flex justify-end w-full items-center gap-x-2'>
                            <h1 className=' text-white'>
                            علیرضا محمدی
                            </h1>
                            <Image src='/homepic/person1.jpg' className=' rounded-full' alt='pic' width={50} height={100}/>
                            
                            </div>

                            <p  dir='rtl' className=' mt-4 text-[13px] md:text-base text-white'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون
                            </p>
                        </div>
                    </div>
                    <div className=' w-[350px] md:w-[450px] xl:w-[550px] h-[13rem] p-3 rounded-[10px] bg-[#040F35]'>
                        <div className=' w-full h-full rounded-[5px] border-2 p-3 border-[#D4AF37]'>
                            <div className=' flex justify-end w-full items-center gap-x-2'>
                            <h1 className=' text-white'>
                            حسن زاده
                            </h1>
                            <Image src='/homepic/person2.jpg' className=' rounded-full' alt='pic' width={50} height={100}/>
                            
                            </div>

                            <p  dir='rtl' className=' mt-4 text-[13px] md:text-base text-white'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون
                            </p>
                        </div>
                    </div>
                   
                </div>
        </div>
    </section>
  )
}
