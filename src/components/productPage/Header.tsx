import Image from "next/image";
import React from "react";
import { icons } from "../../assets";

export default function Header() {
  return (
    <div className="py-[24px] lg:w-[73vw] mx-auto flex items-center justify-center lg:justify-start gap-[30px]">
      <p className="font-bold text-sm ">Home</p>
      <Image src={icons.arrow_next_small} alt="" className="w-[7px] h-[12px]" />
      <p className="text-[#737373] text-sm font-bold">Shop</p>
    </div>
  );
}
