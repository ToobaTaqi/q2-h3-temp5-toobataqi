// parent of PricingCard
import Image from "next/image";
import React from "react";
import { icons } from "../../assets";
// import PricingCard from "./PricingCard";
import Partners from "../globalComponents/Partners";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section className=" bg-[#FAFAFA] py-[75px]">
      <div className="w-[80vw] mx-auto flex flex-col gap-[48px]">
        <div className="text-center flex flex-col gap-[10px]">
          <h2 className="text-[#252B42] text-[40px] font-bold">Pricing</h2>
          <p className="text-[#737373] text-sm ">
            Problems trying to resolve <br className="lg:hidden" /> the conflict
            between <br className="hidden lg:block"/> the two major <br className="lg:hidden" /> realms of
            Classical physics: <br className="lg:hidden" /> Newtonian mechanics
          </p>
        </div>

        <div className="flex gap-[16px] w-[330px] mx-auto justify-between items-center">
          {/* <div className="flex gap-[16px] justify-between"> */}
          <h4 className="font-bold">Monthly</h4>
          <Image
            src={icons.formCheckInp}
            alt=""
            width={100}
            height={100}
            className="w-[45px] h-[25px]"
          />
          {/* </div>
    <div className="flex gap-[16px] justify-between"> */}
          <h4 className="font-bold">Yearly</h4>
          <button className="bg-[#B2E3FF] font-bold text-sm text-[#23A6F0] py-[10px] px-[20px] rounded-full">
            Save 25%
          </button>
          {/* </div> */}
        </div>

        <div className="flex flex-col items-center gap-[48px] lg:flex-row">
          {/* cards */}
          <PricingCard plan="FREE" price="0" />
          <PricingCard plan="STANDARD" price="9.99" />
          <PricingCard plan="PREMIUM" price="19.99" />
        </div>

     
      </div>
    </section>
  );
}
