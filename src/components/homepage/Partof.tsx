import Image from "next/image";
import React from "react";
import { Products } from "../../assets";

export default function Partof() {
  return (
    <section className="pt-[120px] min-w-[333px] w-[60vw] lg:w-full lg:items-center mx-auto flex flex-col lg:flex-row-reverse gap-[28px] text-center lg:text-start">
      <div className="flex flex-col gap-[32px] lg:gap-[30px] lg:justify-start lg:w-[375px] lg:mr-[198px] lg:h-[326px]">
        <h1 className="text-[#BDBDBD] font-bold">SUMMER 2020</h1>
        <h2 className="text-[#252B42] font-bold text-4xl lg:text-[40px]">
          Part of the Neural Universe
        </h2>
        <p className="text-[#737373] text-xl ">
          We know how large <br className="lg:hidden"/> objects wil act,<br className="hidden lg:block"/> but <br className="lg:hidden"/> things on a small scale.
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-[25px]">
          <button className="rounded text-white text-sm font-bold px-8 py-3 bg-[#23A6F0] w-fit">
            BUY NOW
          </button>
          <button className=" text-[#23A6F0] border px-8 py-3 w-fit rounded border-[#23A6F0] text-sm font-bold">
            Learn More
          </button>
        </div>
      </div>

      <Image src={Products.p12} alt="" className="lg:w-[725px]"/>
    </section>
  );
}
