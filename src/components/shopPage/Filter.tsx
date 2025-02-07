// import { icons } from "@/app/assets";
// import Image from "next/image";
// import React from "react";

// export default function Filter() {
//   return (
//     <div className="bg-white w-full">
//       <div className="bg-white flex flex-col lg:flex-row lg:justify-between lg:w-[75vw] mx-auto gap-[24px] py-[24px] items-center">
//         <p className="text-sm font-bold text-[#737373] flex flex-col text-center">
//           Showing all results{" "}
//           <span className="text-red-400 text-xs">
//             this filter is not working yet
//           </span>
//         </p>

//         <div className="flex gap-[15px] justify-center items-center">
//           <p className="text-sm font-bold text-[#737373]">Views</p>
//           <div className="border rounded p-3">
//             <Image src={icons.block} alt="" className="w-[16px] h-[16px]" />
//           </div>
//           <div className="border rounded p-3">
//             <Image src={icons.todos} alt="" className="w-[16px] h-[16px] " />
//           </div>
//         </div>

//         <div className="flex gap-[15px]">
//           <select
//             id=""
//             name="Popularity"
//             className="text-sm text-[#737373] bg-gray-100 border-[#DDDDDD] border rounded py-3 px-5"
//           >
//             <option value="popularity">All Products</option>
//             <option value="option1">Best Sellers</option>
//             <option value="option2">New Arrivals</option>
//             {/* <option value="option3">option3</option> */}
//           </select>
//           <button className="bg-[#23A6F0] text-white py-3 px-5 rounded">
//             Filter
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
"use client";
import { icons } from "../../assets";
import Image from "next/image";
import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (minPrice: number, maxPrice: number, isNew: boolean) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [isNew, setIsNew] = useState(false);

  const handleFilterChange = () => {
    onFilterChange(minPrice, maxPrice, isNew);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPrice(Number(value));
    } else {
      setMaxPrice(Number(value));
    }
  };

  // const applyFilter = () => {
  //   onFilterChange(minPrice, maxPrice);
  // };

  return (
    <div className="bg-white w-full">
      <div className="bg-white flex flex-col lg:flex-row lg:justify-between lg:w-[75vw] mx-auto gap-[24px] py-[24px] items-center">
        <p className="text-sm font-bold text-[#737373] flex flex-col text-center">
          Showing all results
          {/* <span className="text-red-400 text-xs">
            Filter is now working!
          </span> */}
        </p>

        {/* <div className="flex gap-[15px] justify-center items-center">
          <p className="text-sm font-bold text-[#737373]">Views</p>
          <div className="border rounded p-3">
            <Image src={icons.block} alt="" className="w-[16px] h-[16px]" />
          </div>
          <div className="border rounded p-3">
            <Image src={icons.todos} alt="" className="w-[16px] h-[16px]" />
          </div>
        </div> */}

        {/* Price Range Filter */}
        <div className="flex flex-col lg:flex-row gap-[15px] items-center">
          <div className="flex flex-col text-sm text-[#737373]">
            <label>Min Price: {minPrice}</label>
            <input
              type="range"
              name="minPrice"
              min="0"
              max="1000"
              value={minPrice}
              onChange={handlePriceChange}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col text-sm text-[#737373]">
            <label>Max Price: {maxPrice}</label>
            <input
              type="range"
              name="maxPrice"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={handlePriceChange}
              className="cursor-pointer"
            />
          </div>
          <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isNew}
          onChange={(e) => setIsNew(e.target.checked)}
          className="w-4 h-4"
        />
        Show Only New Arrivals
      </label>
          <button
            onClick={handleFilterChange}
            className="bg-[#23A6F0] text-white py-3 px-5 rounded"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}
