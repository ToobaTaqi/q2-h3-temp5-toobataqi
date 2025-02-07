import React from "react";
import { globalImages, icons } from "../../assets";
import Image from "next/image";

export default function Header() {
  return (
    <section className="flex flex-col lg:flex-row lg:w-[73vw] mx-auto gap-[40px] py-[80px] lg:justify-between lg:items-center">
      
      <div className="text-[#252B42] text-center lg:text-start w-[80vw] lg:w-[42vw] mx-auto flex flex-col gap-[40px] lg:items-start items-center">
        <h2 className="font-bold">CONTACT US</h2>
        <h3 className="font-bold text-[40px] ">Get in touch today!</h3>
        <p className="text-[#737373] text-xl lg:w-full w-[57vw] mx-auto">
          We know how large objects will act,<br className="hidden lg:block"/> but things on a small scale just
          do not act that way.
        </p>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold text-2xl ">Phone ; +451 215 215 </h3>
          <h3 className="font-bold text-2xl ">Fax ; +451 215 215 </h3>
        </div>

        <div className="flex p-[10px] gap-[34px]">
          <Image
            src={icons.twitterteam}
            alt=""
            width={100}
            height={100}
            className="w-[30px] h-auto"
          />
          <Image
            src={icons.facebookTrial}
            alt=""
            width={100}
            height={100}
            className="w-[30px] h-auto"
          />
          <Image
            src={icons.instagramTrial}
            alt=""
            width={100}
            height={100}
            className="w-[30px] h-auto"
          />
          <Image
            src={icons.linkedinTrial}
            alt=""
            width={100}
            height={100}
            className="w-[30px] h-auto"
          />
        </div>
      </div>

    
      <Image
        src={globalImages.contactBanner}
        alt=""
        width={100}
        height={100}
        className="w-[387px] h-auto mx-auto"
      />

    </section>
  );
}
