import Image from "next/image";
import React from "react";
import { icons } from "../../assets";

export default function LetsTalk() {
  return (
    <section className="text-[#252B42] flex flex-col items-center py-[112px] gap-[20px]">
      <Image src={icons.contactIcon4} alt="" />
      <div className="flex flex-col gap-[30px] items-center">
        <h3 className="font-bold">WE Can't WAIT TO MEET YOU</h3>
        <h2 className="font-bold text-[58px]">Let’s Talk</h2>
        <button className="bg-[#23A6F0] rounded text-white py-[15px] px-[40px] w-fit">
          Try it free now
        </button>
      </div>
    </section>
  );
}
