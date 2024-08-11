'use client'
import {useState} from "react";
import Image from "next/image";
import { NAVBAR } from "@/constant";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'


export default function Navbar() {
  const router = useRouter()

  const [showNav , setShowNav] = useState(false)
  const [test , setTest] = useState('')

  return (
    <div className=" relative">
      <nav className=" absolute z-50 w-full px-[26px] lg:px-[90px] xl:px-[130px] 2xl:px-[160px] flex justify-between h-[4rem] bg-[#020202be]">
        <div  className=" flex   items-center gap-x-6 lg:hidden">
          <Image onClick={()=>setShowNav(!showNav)} src="/svgicon/menu.svg" className=" cursor-pointer" alt="pic" width={30} height={100} />
          <button onClick={()=> router.push('/contact-us')} className=" text-white py-2 px-5 text-[13px] bg-[#8b8b8b5f] rounded-[10px]">درخواست مشاوره</button>
        </div>
        <div className=" lg:flex gap-x-4  hidden items-center flex-row-reverse">
            <div className=" text-white  text-center ">
                <p>+98  9946871425</p>
                <p>تلفن تماس</p>
            </div>
            <hr className=" w-[1px] h-full bg-white opacity-15" />
            <div className=" text-white  text-center ">
                <p>8:00 - 20:00</p>
                <p>ساعت کاری</p>
            </div>
        </div>
        <div onClick={()=> router.push('/')} className=" cursor-pointer flex  items-center gap-x-2">
          <h1 className=" text-white text-[15px] lg:text-[20px] font-bold">کاویانی</h1>
          <Image src="/svgicon/logo.svg" alt="pic" width={30} height={100} />
        </div>

        
      </nav>

      <AnimatePresence>
        {showNav && (
          <>
          <motion.div animate={{height:480}} exit={{height:0}} initial={{height:0}} className=" overflow-hidden">
          <ul dir="rtl" className=" flex gap-x-10  pt-20 px-4 text-black   gap-y-5 flex-col whitespace-nowrap">
              {NAVBAR.map((i , index)=>(
                <Link key={index} href={i.url}>
                <motion.li animate={{opacity:100 }} transition={{duration:1}} className=" opacity-0  hover:border-b-[0.35rem] transition-all cursor-pointer ease-in  relative z-30 border-[#e6ba29] text-[17px]">
                    {i.title}
                  </motion.li>
                  <hr  className=" h-[2px] bg-[#D4AF37]"/>
                </Link>
                
              ))}
              
           </ul>
          </motion.div>
        </>
        )}
           
      </AnimatePresence>
         
        
      <div className=" w-full lg:flex hidden justify-center relative">
        <div className=" absolute top-20  z-40  w-[78vw] h-[2.7rem]">
          <div className=" w-full absolute bottom-0 bg-white h-[0.35rem] rounded-full"/>
             <ul dir="rtl" className=" flex gap-x-10  pt-[11.5px] px-4 text-white whitespace-nowrap">
                {NAVBAR.map((i , index)=>(
                  <Link key={index} href={i.url}>
                  <li className="  hover:border-b-[0.35rem] transition-all cursor-pointer ease-in  relative z-30 border-[#e6ba29] text-[17px]">
                      {i.title}
                    </li>
                  </Link>
                  
                ))}
                
             </ul>
             <button onClick={()=> router.push('/contact-us')} className=" -top-2 absolute text-white py-2 px-5 text-[13px] bg-[#8b8b8b5f] rounded-[10px]">درخواست مشاوره</button>

        </div>
      </div>
    </div>
  );
}
