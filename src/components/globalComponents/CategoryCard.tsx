import Image from "next/image";
import React from "react";
import { Products, icons } from "../../assets";

export default function CategoryCard({img,title}:{img:string,title:string}) {
  return (
   <div className="relative">
     <Image
      src={img}
      alt={``}
      className="w-[332px] h-[300px] lg:w-[205px] lg:h-[223px] object-cover"
      width={100}
      height={100}
    />
    <p className="absolute top-[125px] left-[120px] text-white font-bold uppercase">{title}</p>
   </div>
  );
}
