import React from "react";
import { brands } from "../../assets";
import Image from "next/image";

export default function Partners() {
  const brand = [
    brands.b1,
    brands.b2,
    brands.b3,
    brands.b4,
    brands.b5,
    brands.b6,
  ];
  // console.log("brands------", brand);

  return (
    <section className="flex flex-col w-[80vw] lg:flex-row lg:w-[73px]  mx-auto justify-center  items-center gap-[60px] py-[50px]">
      {brand.map((b) => (
        <Image src={b.src} alt="" width={100} height={100} />
      ))}
    </section>
  );
}
