import { icons } from "../../assets";
import Image from "next/image";
import React from "react";

export default function LocationCard({
  bg,
  icon,
  text,
}: {
  bg: string;
  icon: any;
  text: string;
}) {
  return (
    <div
      className={`bg-${bg} w-[328px] mx-auto flex flex-col justify-center gap-[15px] py-[50px] px-[40] items-center`}
    >
      <Image
        src={icon}
        alt=""
        width={100}
        height={100}
        className="w-[72px] h-auto"
      />

      <div className={`text-${text} text-center`}>
        <h6 className="font-bold text-sm">georgia.young@example.com</h6>
        <h6 className="font-bold text-sm">georgia.young@ple.com</h6>
      </div>

      <h5 className="font-bold">Get Support</h5>

      <button className="border border-[#23A6F0] text-[#23A6F0] py-[10px] px-[20px] text-sm font-bold rounded">
        Submit Request
      </button>
    </div>
  );
}
