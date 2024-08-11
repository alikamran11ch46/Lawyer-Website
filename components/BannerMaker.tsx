import React from 'react'

type BannerProps = {
    title : string,
    banner : string
}

export default function BannerMaker({title , banner} : BannerProps) {
  return (
    <div
        dir="rtl"
        className={`${banner} relative flex  items-center w-full  z-20 md:h-[30rem]  h-[23rem]`}
      >
        <div className=" w-full h-full  absolute  bg-[#0202026e]" />
        <div className=" relative px-5 lg:px-20  xl:px-32 mt-20 z-40">
          <h1 className="  text-white font-bold mb-3 text-[34px] lg:text-[54px]">
          {title}
          </h1>
          <p className="  text-white font-bold underline">
            خانه {" >"} {title}
          </p>
        </div>
      </div>
  )
}
