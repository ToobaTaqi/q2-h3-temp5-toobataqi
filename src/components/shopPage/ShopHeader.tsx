import Image from 'next/image'
import React from 'react'
import { icons } from "../../assets";

export default function ShopHeader() {
  return (
    <div className="bg-[#FAFAFA] pt-5">
    {/* <button className='text-sm text-end flex justify-self-end lg:justify-self-center font-bold  px-5 py-3 rounded-full text-white mx-10 border bg-green-400'>Switch language</button> */}
   <div className='text-center flex flex-col lg:w-[73vw] mx-auto lg:flex-row lg:justify-between justify-center items-center gap-16 py-12'>
 
   <h1 className="text-2xl font-bold">Shop</h1>
    <div className="flex items-center gap-[15px]">
      <p className="font-bold text-sm ">Home</p>
      <Image
        src={icons.arrow_next_small}
        alt=""
        className="w-[7px] h-[12px]"
      />
      <p className="text-[#737373] text-sm font-bold">Shop</p>
    </div>
   </div>
  </div>
  )
}
