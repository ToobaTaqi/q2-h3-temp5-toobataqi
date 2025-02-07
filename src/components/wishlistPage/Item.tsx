import React from "react";

export default function Item() {
  return (
    <div className="flex gap-[10px] lg:gap-[20px] lg:justify-between items-center border shadow lg:pr-[10px]">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lcsxrF8y6syCvTXgZXwX6M1Bkdm0Q189rQ&s"
        alt=""
        className="w-[100px] h-[100px] object-cover"
      />

      <div className="flex flex-wrap items-start lg:items-center gap-[15px] w-full justify-between">
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-xl">ProductTitle</h2>
          <p className="text-green-400 text-sm font-semibold">
            inStock? <span className="text-red-400">isNew?</span>
          </p>
        </div>

        <p>price/-</p>

        <div className="flex gap-0 border justify-center  border-black rounded-2xl w-fit shadow-lg bg-white">
          <button className="text-center w-[30px] text-xl hover:font-bold ">
            -
          </button>
          <input
            disabled
            type="number"
            placeholder="10000"
            className="text-center w-[70px] px-2 border border-x-inherit"
          />
          <button className="text-center w-[30px] text-xl hover:font-bold">
            +
          </button>
        </div>
        <p className="text-xs text-red-300 hover:text-red-600 font-bold">
          Delete
        </p>
      </div>
    </div>
  );
}
