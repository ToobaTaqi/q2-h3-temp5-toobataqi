import React from "react";
// import Partners from "../../components/globalComponents/Partners";
// import Clients from "../../components/shopPage/Clients";
import Partners from "../globalComponents/Partners";

export default function Companies() {
  return (
    <section className="bg-[#FAFAFA] py-[120px]">
      <div className="flex flex-col lg:gap-[24px] w-[80vw] mx-auto">
        <div className="flex flex-col gap-[30px]">
          <h2 className="font-bold text-[40px] text-center leading-[50px] px-10 ">
            Big Companies Are Here
          </h2>
          <p className="text-sm text-[#737373] text-center">
            Problems trying to resolve the conflict <br className="lg:hidden" />
            between <br className="hidden lg:block"/> the two major realms of Classical
            <br className="lg:hidden" /> physics: Newtonian mechanics
          </p>
        </div>
        <Partners />
        {/* <Clients/> */}
      </div>
    </section>
  );
}
