import { Products } from "../../assets";
import Image from "next/image";
import React from "react";

export default function WorkWithUs() {
  return (
    <section className="w-full bg-[#2A7CC7] lg:h-[640px] lg:py-0 py-[90px] lg:flex lg:gap-0">
      <div className=" text-white text-center lg:text-start lg:justify-center flex flex-col gap-[24px] w-[272px] lg:w-[60vw] px-[10vw] mx-auto">
        <h2 className="font-bold">WORK WITH US</h2>
        <h3 className="font-bold text-[40px]">Now Let's grow Yours</h3>
        <p className="text-sm">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <div className="flex justify-center items-center lg:justify-start lg:items-start">
          <button className="text-sm py-[15px] px-[40px] rounded border border-white w-fit hover:bg-white hover:text-[#2A7CC7]">
            Button
          </button>
        </div>
      </div>
      <Image src={Products.p1} alt="" className="hidden lg:block w-[40vw] h-[640px] min-w-[590px] object-cover"/>
    </section>
  );
}
