import React from "react";
import { team } from "../../assets";
import Image from "next/image";

export default function Banners() {
  return (
    <section className="flex flex-col lg:flex-row gap-y-[10px] w-full lg:h-[37vw] lg:max-h-[530px] justify-center items-center">
      <Image
        src={team.teamBanner1}
        alt=""
        width={100}
        height={100}
        className="w-[99vw] lg:w-[48vw] lg:max-w-[700px] lg:h-[37vw] lg:max-h-[530px] mx-auto h-[530px] object-cover "
      />

      <div className="flex flex-col gap-[10px] items-center">
        <div className="flex w-full gap-[10px] items-center">
          <Image
            src={team.teamBanner2}
            alt=""
            width={100}
            height={100}
            className="w-[204px] lg:w-[25vw] lg:max-w-[360px] lg:h-[18vw] lg:max-h-[260px] mx-auto h-[260px] object-cover "
          />
          <Image
            src={team.teamBanner3}
            alt=""
            width={100}
            height={100}
            className="w-[204px] lg:w-[25vw] lg:max-w-[360px] lg:h-[18vw] lg:max-h-[260px] mx-auto h-[260px] object-cover "
          />
        </div>

        <div className="flex w-full gap-[10px] items-center">
          <Image
            src={team.teamBanner4}
            alt=""
            width={100}
            height={100}
            className="w-[204px] lg:w-[25vw] lg:max-w-[360px] lg:h-[18vw] lg:max-h-[260px] mx-auto h-[260px] object-cover"
          />
          <Image
            src={team.teamBanner5}
            alt=""
            width={100}
            height={100}
            className="w-[204px] lg:w-[25vw] lg:max-w-[360px] lg:h-[18vw] lg:max-h-[260px] mx-auto h-[260px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
