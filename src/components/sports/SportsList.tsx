import React from "react";
import SportsItem from "./SportsItem";
import { SportsInterface } from "./Sports";
import image4 from "../../assets/4.png";
import Image from "next/image";

function SportsList(props: SportsInterface) {
  return (
    <ul className="flex gap-5">
      {props.data &&
        props.data.map((item, i) => (
          <SportsItem
            key={i}
            name={item.name}
            sport={item.sport}
            image={item.image}
            events={item.events}
            darkTheme={props.darkTheme}
          />
        ))}
      <li
        className={`h-[511px] w-[237px] ${
          props.darkTheme ? " bg-dark-4" : "bg-white"
        } p-3 text-dark-1`}
      >
        <div className="h-[218px]">
          <Image src={image4} alt="ads" className="bg-cover h-full w-full" />
        </div>
        <p className="text-[20px] font-semibold px-2  mt-8 mb-3">
          Advertisement title
        </p>
        <p
          className={`text-[12.5px] px-2  ${
            props.darkTheme ? "text-light-1" : "text-dark-5"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum
          dolor, molestiae reiciendis sapiente unde reprehenderit? Quidem
          ratione accusamus voluptatibus sit illum, sint eveniet, libero ab
          fugiat repellat modi sunt.
        </p>
      </li>
    </ul>
  );
}

export default SportsList;
