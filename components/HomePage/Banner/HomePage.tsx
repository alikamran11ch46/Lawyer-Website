import React from 'react'
import Image from 'next/image'
import ShinyText from '@/components/ui/ShinyText'

export default function HomePage() {
  return (
    <div>
      <div className='homebg relative flex flex-col justify-start pt-16 w-full lg:h-[40rem] z-20 md:h-[30rem] xl:h-screen h-[23rem]'>

            <div className=' w-full h-full absolute bg-[#02020280]'/>

            {/* Welcome Text - Centered at Top with Alternating Text */}
            <div className='relative z-40 text-center mb-8'>
              <ShinyText
                texts={["WELCOME", "ڀلي ڪري آيا"]}
                interval={15000}
                disabled={false}
                speed={3}
                className='text-[40px] lg:text-[60px] xl:text-[72px] font-extrabold drop-shadow-2xl'
              />
            </div>

            {/* Main Content - Left Aligned */}
            <div className='relative flex flex-col gap-y-2 z-40 px-[26px] lg:px-[90px] xl:px-[130px] 2xl:px-[160px]'>
                <h2 className='text-white text-[32px] lg:text-[48px] font-bold drop-shadow-lg'>
                  <div>Tando Muhammad Khan</div>
                  <div>Bar Association</div>
                </h2>
                <p className='text-white text-[11px] lg:text-[15px] drop-shadow-md'>The District Bar Association is committed to promoting professional legal services with expertise across criminal, civil, commercial, and family law matters, ensuring justice and equal access to law for all.</p>
            </div>
      </div>
    </div>
  )
}
