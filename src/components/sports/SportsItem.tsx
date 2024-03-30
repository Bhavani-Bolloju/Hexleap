import React from "react";
import image1 from "../../assets/1.png";
import Image from "next/image";
import { Team } from "./Sports";

function SportsItem({ name, sport, events, image }: Team) {
  return (
    <li className="h-[511px] w-[237px] bg-dark-4 p-3">
      <div className="h-fill">
        <Image
          className="bg-cover h-full w-full"
          src={image}
          alt={name}
          width={500}
          height={1000}
        />
      </div>
      <p className="capitalize font-medium text-[17px] my-4">{name}</p>
      <div className="bg-dark-1 flex justify-between p-2">
        <div className="flex flex-col gap-[1px]">
          <span className="capitalize text-[12px] text-light-1 font-normal">
            total events
          </span>
          <span className="font-medium text-[14px] capitalize">
            {events} events
          </span>
        </div>
        <div className="flex flex-col gap-[1px]">
          <span className="capitalize text-[12px] text-light-1 font-normal">
            sports
          </span>
          <span className="font-medium text-[14px] capitalize">{sport}</span>
        </div>
      </div>
    </li>
  );
}

export default SportsItem;
