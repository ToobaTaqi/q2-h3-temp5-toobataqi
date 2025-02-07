import React from "react";
import Header from "../../components/teamPage/Header";
import Banners from "../../components/teamPage/Banners";
import Team from "../../components/teamPage/Team";
import FreeTrial from "../../components/pricingPage/FreeTrial";

export default function page() {
  return (
    <div>
      <Header />
      <Banners />
      <Team />
      <FreeTrial />
    </div>
  );
}
