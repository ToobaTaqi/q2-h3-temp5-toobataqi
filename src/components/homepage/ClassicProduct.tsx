import Image from "next/image";
import React from "react";
import { Products } from "../../assets";

export default function ClassicProduct() {
  return (
    <section className=" pt-48 lg:px-[195px]  text-center lg:text-start bg-[#23856D] flex flex-col lg:flex-row lg:justify-center items-center lg:items-end gap-[30px]">
      <div className=" min-w-[333px] w-[60vw] lg:w-[510px] lg:h-[432px] mx-auto flex flex-col gap-[30px] lg:justify-center lg:mb-[112px]">
        <h1 className="text-white lg:text-xl">SUMMER 2020</h1>
        <h2 className="font-bold text-[40px] text-white lg:text-[58px]">Vita Classic <br /> Product</h2>
        <p className="text-white text-xl lg:text-sm">
        We know how large objects will act, We know <br className="lg:block hidden"/> how are objects will act, We know
        </p>
        <div className="flex flex-col gap-[20px] lg:gap-[34px] lg:flex-row lg:justify-start items-center">
          <p className="text-white font-bold text-2xl">$16.48</p>
          <button className="text-sm font-bold rounded text-white bg-[#2DC071] px-8 py-3 lg:py-[15px] lg:px-[40px] w-fit">
            ADD TO CART
          </button>
        </div>
      </div>
      <Image src={Products.p11} alt="" className=""/>
    </section>
  );
}
