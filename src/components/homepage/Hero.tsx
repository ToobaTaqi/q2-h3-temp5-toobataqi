import React from "react";
import {globalImages} from "../../assets";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[753px]  lg:h-full bg-red-500">
      <Image
        src={globalImages.hero}
        alt=""
        width={100}
        height={100}
        className="w-full h-full object-cover lg:object-cover min-w-[416px] min-h-[753px]"
      />

      <div className="absolute top-40 lg:top-5 left-20 lg:left-48 flex flex-col justify-center items-center lg:items-start h-[500px] lg:h-[716px] w-[70vw] lg:w-[600px] gap-[35px] text-white text-center lg:text-left mx-auto ">
        <h1 className="text-sm font-bold leading-6 ">SUMMER 2020</h1>
        <h2 className="font-bold text-4xl lg:text-5xl">NEW COLLECTION</h2>
        <p className="text-xl leading-[30px]">We know how large objects will act, <br className="hidden lg:block"/> but things on a small scale.</p>
        <button className="bg-[#2DC071] font-bold leading-8 text-white px-10 py-4 rounded w-fit">SHOP NOW</button>
      </div>
    </section>
  );
}
