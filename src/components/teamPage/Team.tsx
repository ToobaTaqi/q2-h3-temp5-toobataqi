import React from "react";
import TeamMember from "../aboutPage/TeamMember";
import { team } from "../../assets";

export default function Team() {
  return (
    <section className="flex flex-col items-center justify-center lg:gap-[112px] lg:py-[112px] lg:w-[80vw] mx-auto" >
      <div className="flex flex-col w-[60vw] text-center pt-[75px] py-[45px] gap-[10px]">
        <h3 className=" text-[#252B42] text-4xl font-bold">Meet Our Team</h3>
      </div>

      <div className="pb-[30px] grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-y-[112px] lg:gap-x-[30px]">
        <TeamMember img={team.team1} />
        <TeamMember img={team.team2} />
        <TeamMember img={team.team3} />
        <TeamMember img={team.team1} />
        <TeamMember img={team.team2} />
        <TeamMember img={team.team3} />
        <TeamMember img={team.team1} />
        <TeamMember img={team.team2} />
        <TeamMember img={team.team3} />
      </div>
    </section>
  );
}
