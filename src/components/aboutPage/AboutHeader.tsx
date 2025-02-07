import React from "react";
import { globalImages } from "../../assets";
import Image from "next/image";

export default function AboutHeader() {
  return (
    <section className="flex flex-col lg:w-[73vw] mx-auto lg:justify-between lg:flex-row justify-center items-center gap-[40px] text-center">
      <div className="flex flex-col gap-[40px] lg:gap-[35px] lg:items-start lg:text-start">
        <h5 className="font-bold hidden lg:block">ABOUT COMPANY</h5>
        <h2 className="font-bold text-4xl ">ABOUT US</h2>
        <p className="text-[#737373] text-start">
          We know how large <br className="lg:hidden" /> objects will act, <br className="hidden lg:block"/> but
          things <br className="lg:hidden" /> on a small scale just do
          <br className="lg:hidden" /> not act that way.
        </p>
        <button className="bg-[#23A6F0] rounded py-[15px] px-[40px] lg:w-fit text-sm font-bold text-white">
          Get Quote Now
        </button>
      </div>
      <Image
        src={globalImages.aboutgirl}
        alt=""
        width={100}
        height={100}
        className="w-[387px] h-[440px] min-w-[387px] min-h-[440px]"
      />
    </section>
  );
}
