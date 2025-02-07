// child of Pricing
import React from "react";
import { icons } from "../../assets";
import Image from "next/image";

export default function PricingCard({
  plan,
  price,
}: {
  plan: string;
  price: string;
}) {
  return (
    <div className="bg-white hover:bg-[#252B42] hover:text-white w-[327px] flex flex-col gap-[35px] text-center border rounded-xl border-[#23A6F0] py-[50px] px-[40px] text-[#252B42]">
      <h4 className=" text-2xl font-bold">{plan}</h4>
      <p className="text[#737373]">Organize across all apps by hand</p>

      <div className="flex justify-center items-center gap-[10px]">
        <p className="font-bold text-[40px] text-[#23A6F0] ">{price} </p>
        <div className="flex flex-col">
          <p className="text-[#23A6F0] text-2xl font-bold">$</p>
          <p>Per Month</p>
        </div>
      </div>

      <div className="flex flex-col gap-[15px]  items-start text-left">
        <div className="flex justify-center items-center gap-[10px]">
          {/* checks */}
          <Image
            src={icons.check}
            alt=""
            width={40}
            //   height={50}
            className=" px-[8px] py-[13px] bg-[#2DC071] rounded-full "
          />

          <p className="font-bold text-sm">Unlimited product updates</p>
        </div>

        <div className="flex justify-center items-center gap-[10px]">
          {/* checks */}
          <Image
            src={icons.check}
            alt=""
            width={40}
            //   height={50}
            className=" px-[8px] py-[13px] bg-[#2DC071] rounded-full "
          />

          <p className="font-bold text-sm">Unlimited product updates</p>
        </div>

        <div className="flex justify-center items-center gap-[10px]">
          {/* checks */}
          <Image
            src={icons.check}
            alt=""
            width={40}
            //   height={50}
            className=" px-[8px] py-[13px] bg-[#2DC071] rounded-full "
          />

          <p className="font-bold text-sm">Unlimited product updates</p>
        </div>

        <div className="flex justify-center items-center gap-[10px]">
          {/* checks */}
          <Image
            src={icons.check}
            alt=""
            width={40}
            //   height={50}
            className=" px-[8px] py-[13px] bg-[#BDBDBD] rounded-full "
          />

          <p className="font-bold text-sm">1GB Cloud storage</p>
        </div>

        <div className="flex justify-center items-center gap-[10px]">
          {/* checks */}
          <Image
            src={icons.check}
            alt=""
            width={40}
            //   height={50}
            className=" px-[8px] py-[13px] bg-[#BDBDBD] rounded-full "
          />

          <p className="font-bold text-sm ">Email and community support</p>
        </div>
      </div>

      <button className="text-white text-sm bg-[#23A6F0] rounded py-[15px] px-[40px] font-bold">
        Try for free
      </button>
    </div>
  );
}
