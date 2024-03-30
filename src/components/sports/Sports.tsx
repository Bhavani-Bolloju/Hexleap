import React from "react";
import SportsList from "./SportsList";
import { StaticImageData } from "next/image";
// import { Team } from "../data/data";

export interface Team {
  name: string;
  events: number;
  sport: string;
  image: StaticImageData;
}
export interface SportsInterface {
  data: Team[];
}
function Sports(props: SportsInterface) {
  return (
    <section className="w-[1241px] m-auto">
      <h1 className="font-poppins font-bold text-[24px] border-b-2 w-fit border-[#738FFF] capitalize mb-6">
        sports
      </h1>
      <SportsList data={props.data} />
    </section>
  );
}

export default Sports;
