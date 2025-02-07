import Image from "next/image";
import React from "react";
import { team, icons } from "../../assets";
import Link from "next/link";

export default function TeamMember({ img }: { img: any }) {
  return (
    <Link href="/team">
      <section className="flex flex-col w-[316px] h-[383px] mx-auto items-center">
        <Image src={img} alt="" width={100} height={100} className="w-[316px] h-[231px] object-cover" />
        <div className="flex flex-col p-[30px] gap-[10px] items-center">
          <h2 className="font-bold text-[#252B42]">Username</h2>
          <p className="text-[#737373] font-bold text-sm">Profession</p>
          <div className="flex gap-[20px] py-[10px] ">
            <Image
              src={icons.facebookteam}
              alt=""
              width={20}
              height={20}
              className="w-[24px] h-[24px] "
            />
            <Image
              src={icons.instagramteam}
              alt=""
              width={20}
              height={20}
              className="w-[24px] h-[24px] "
            />
            <Image
              src={icons.twitterteam}
              alt=""
              width={20}
              height={20}
              className="w-[24px] h-[24px] "
            />
          </div>
        </div>
      </section>
    </Link>
  );
}
