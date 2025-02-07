import React from "react";
import Header from "../../components/pricingPage/Header";
import Pricing from "../../components/pricingPage/Pricing";
import Partners from "../../components/globalComponents/Partners";
import FAQs from "../../components/pricingPage/FAQs";
import FreeTrial from "../../components/pricingPage/FreeTrial";

export default function page() {
  return (
    <div>
      <Header />
      <Pricing />
      <div className="flex flex-col gap-[23px] py-[45px] bg-[#FAFAFA]">
        <h2 className="text-[20px] text-[#252B42] text-center">
          Trusted By Over 4000 <br className="lg:hidden" /> Big Companies
        </h2>
        <Partners />
      </div>
      <FAQs />
      <FreeTrial />
    </div>
  );
}
