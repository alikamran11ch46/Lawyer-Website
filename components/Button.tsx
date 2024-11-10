import React from 'react'

type styleprop = {
    style : string
}

export default function Button({style} : styleprop) {
  return (
    <div>
      <button className=' w-[40%] relative py-1 mt-3  group lg:py-3 text-white rounded-md border border-[#D4AF37]'>
                    <span className=' w-[0] group-hover:w-[50%] transition-all ease-in  duration-150 h-full absolute left-0 bg-[#D4AF37] top-0'/>
                             <p className={`' ${style} transition-all relative z-20  duration-200 '`}>مشاهده بیشتر</p>
                      <span className=' w-[0] group-hover:w-[50%] transition-all ease-in duration-150 h-full absolute right-0 bg-[#D4AF37] top-0'/>
        </button>
    </div>
  )
}
