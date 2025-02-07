import React from "react";
import { icons } from "../../assets";
import Image from "next/image";

export default function Header() {
  return (
    <div className=" text-center flex flex-col justify-center items-center gap-[16px] py-12">
      <h2 className="text-[#737373] font-bold">Pricing</h2>
      <h1 className="text-[40px] font-bold text-[#252B42]">Simple Pricing</h1>

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
  );
}
