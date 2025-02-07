import React from "react";
import { Products, icons } from "../../assets";
import Image from "next/image";

export default function ProductCard({ image }: { image: any }) {
  return (
    <div className="flex flex-col gap-[30px] border drop-shadow w-[330px] lg:w-[350px] h-[606px]">
      <Image
        src={image}
        alt=""
        className="lg:w-[350px] w-[330px] h-[300px]  object-cover"
      />
      <div className="flex flex-col gap-[20px] px-[25px] pb-[35px] mx-auto">
        <div className="flex text-xs gap-[15px]">
          <p className="text-[#8EC2F2]">Google</p>
          <p className="text-[#737373]">Trending</p>
          <p className="text-[#737373]">New</p>
        </div>
        <h1 className="text-#252B42] text-xl">
          Loudest à la Madison #1 (L'integral)
        </h1>
        <p className="text-[#737373] text-sm">
          We focus on ergonomics and meeting <br className="lg:hidden" /> you
          where you work. It's only a <br className="lg:hidden" />
          keystroke away.
        </p>
        <div className="flex justify-between">
          <div className="flex gap-[5px] items-center">
            <Image src={icons.clock} alt="" className="m-1" />
            <p className="text-[#737373] text-xs">22 April 2021</p>
          </div>
          <div className="flex gap-[5px] items-center">
            <Image src={icons.chart} alt="" className="m-1" />
            <p className="text-[#737373] text-xs">10 comments</p>
          </div>
        </div>

        <div className="flex gap-[10px] items-center">
          <h3 className="text-[#737373] font-bold text-sm">Learn More</h3>
          <Image
            src={icons.arrow_next}
            alt=""
            className="w-[8.62px] h-[16px]"
          />
        </div>
      </div>
    </div>
  );
}
