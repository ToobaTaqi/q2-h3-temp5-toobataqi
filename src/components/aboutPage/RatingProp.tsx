import React from "react";

export default function RatingProp({ h, p }: { h: string; p: string }) {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h4 className="text-[#252B42] font-bold text-5xl">{h}</h4>
      <p className="text-[#737373] font-bold">{p}</p>
    </div>
  );
}
