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
  darkTheme: boolean;
}

interface NewsportsInterface extends SportsInterface {
  darkTheme: boolean;
}
function Sports(props: SportsInterface) {
  return (
    <section className="px-10">
      <h1
        className={`font-poppins font-bold text-[24px] border-b-2 w-fit border-accent capitalize mb-6 ${
          props.darkTheme ? "text-white" : "text-black "
        } transition-colors duration-150`}
      >
        sports
      </h1>
      <SportsList data={props.data} darkTheme={props.darkTheme} />
      <div className="text-center mt-10">
        <button className="bg-accent text-[14px] font-semibold capitalize px-[30px] py-[10px]">
          see more
        </button>
      </div>
    </section>
  );
}

export default Sports;
