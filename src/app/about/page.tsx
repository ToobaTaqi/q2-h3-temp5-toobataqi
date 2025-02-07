import React from "react";
import AboutHeader from "../../components/aboutPage/AboutHeader";
import ProblemsTrying from "../../components/aboutPage/ProblemsTrying";
import Ratings from "../../components/aboutPage/Ratings";
import Team from "../../components/aboutPage/Team";
// import Partners from "../../components/globalComponents/Partners";
import Companies from "../../components/aboutPage/Companies";
import WorkWithUs from "../../components/aboutPage/WorkWithUs";

export default function AboutUs() {
  return (
    <div className="pt-[80px]">
      <AboutHeader />
      <ProblemsTrying />
      <Ratings />
      <Team />
      <Companies />
      <WorkWithUs />
    </div>
  );
}
