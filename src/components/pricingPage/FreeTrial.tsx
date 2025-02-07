import React from "react";
import { icons } from "../../assets";
import Image from "next/image";

export default function FreeTrial() {
  return (
    <section className="flex flex-col gap-[36px] w-[80vw] mx-auto text-center py-[112px] bg-white items-center">
      <h3 className="text-[#252B42] font-bold text-[40px]">
        Start your <br className="lg:hidden" /> 14 days free trial
      </h3>
      <p className="text-[#737373] text-sm ">
        Met minim Mollie non desert Alamo est sit <br className="lg:hidden" />
        cliquey dolor <br className="hidden lg:block"/> do met sent. RELIT official <br className="lg:hidden" />
        consequent.
      </p>
      <button className="bg-[#23A6F0] rounded px-[40px] py-[15px] w-fit text-white text-sm font-bold text-center">
        Try it free now
      </button>
      <div className="flex gap-[34px] p-[10px]">
        <Image
          src={icons.twitterteam}
          alt=""
          width={100}
          className="w-[30px]"
        />
        <Image
          src={icons.facebookTrial}
          alt=""
          width={100}
          className="w-[30px]"
        />
        <Image
          src={icons.instagramTrial}
          alt=""
          width={100}
          className="w-[30px]"
        />
        <Image
          src={icons.linkedinTrial}
          alt=""
          width={100}
          className="w-[30px]"
        />
      </div>
    </section>
  );
}
