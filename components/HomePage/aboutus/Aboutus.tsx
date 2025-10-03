import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Aboutus() {
  return (
    <div className=' flex flex-col md:flex-row w-full md:items-center md:justify-center '>
      <section className=' flex justify-center mb-20 flex-col items-center gap-y-20'>
            <div className=' relative'>
                <Image
                    src='/dba-president.jpg'
                    alt='DBA President'
                    className=' w-[15rem] lg:w-[20rem] rounded-lg shadow-2xl border-4 border-white ring-4 ring-[#D4AF37] object-cover'
                    width={400}
                    height={500}
                    quality={95}
                />
                <div className=' absolute  -bottom-4 -right-4 w-[15rem] h-[20rem] lg:h-[26rem] lg:w-[19rem] -z-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg shadow-lg'/>
            </div>
            
      </section>
        <section>
        <div className=' px-6 md:max-w-[25rem] lg:max-w-[35rem] mr-4 xl:max-w-[45rem]'>
                <p className=' inline-block font-bold py-2 px-2 mb-6 border-l-4  border-[#D4AF37]   text-[#D4AF37] text-lg'>About Us</p>
                <p className=' font-bold mb-6 text-lg leading-relaxed text-justify'>With years of legal expertise, we provide trusted services in criminal, civil, commercial, and family law. Our client-focused approach ensures personalized strategies and strong representation to protect your rights and achieve the best possible outcomes.</p>
                <p className=' font-bold mb-6 text-right text-lg leading-relaxed' dir="rtl">سالن جي قانوني تجربي سان، اسان فوجداري، سول، تجارتي ۽ خانداني قانون ۽ ڀروسي واري خدمتون پيش ڪريون ٿا. اسان هر ڪيس کي ڌيان سان سنڀاليون ٿا ته جيئن توهان جا حق محفوظ رهن ۽ بهتر نتيجا ملي سگهن.</p>
                <Link href='/team'>
                  <button className=' w-[40%] relative py-2 mt-6  group lg:py-4 text-white rounded-md border border-[#D4AF37]'>
                      <span className=' w-[0] group-hover:w-[50%] transition-all ease-in  duration-150 h-full absolute left-0 bg-[#D4AF37] top-0'/>
                               <span className=' text-black transition-all relative z-20  duration-200 '>View More</span>
                        <span className=' w-[0] group-hover:w-[50%] transition-all ease-in duration-150 h-full absolute right-0 bg-[#D4AF37] top-0'/>
                  </button>
                </Link>
            </div>
        </section>     
    </div>
  )
}
