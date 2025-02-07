import React from "react";
import { brands } from "../../assets";
import Image from "next/image";

export default function Clients() {
  const allBrands = Object.values(brands);

  // console.log(typeof brands);
  // console.log("checkthis-------", allBrands);
  return (
    <section className="py-[110px]  bg-[#FAFAFA]">
      <div className="w-[80vw] mx-auto flex flex-col lg:flex-row lg:w-[70vw] lg:gap-[30px] gap-[60px] py-[50px] justify-center items-center">
        {allBrands.map((brand, i) => (
          <Image key={i} src={brand.src} alt="" width={100} height={100} />
        ))}
      </div>
    </section>
  );
}
