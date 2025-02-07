import React from "react";

export default function QnA({ q, a }: { q: string; a: string }) {
  return (
    <div className="py-[16px] w-[70vw] lg:w-[491px] mx-auto px-[15px] flex flex-col gap-[10px] ">
      <h3 className="text-[#252B42] font-bold">{q}</h3>
      <p className="text-[#737373] text-sm">
       {a}
      </p>
    </div>
  );
}
