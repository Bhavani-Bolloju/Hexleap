import React from "react";
import ticket1 from "../../assets/ticket1.png";
import Image from "next/image";
import { TicketsInterface } from "./CollectionList";
function MetaTicket({
  name,
  day,
  date,
  time,
  collection,
  image,
  venue
}: TicketsInterface) {
  return (
    <li className="w-[257px]  bg-dark-4 py-4">
      <div className="h-[401px]">
        <Image className="bg-cover h-full w-full" src={image} alt={name} />
      </div>
      <div className="flex flex-col justify-between text-center px-3 items-center gap-3">
        <p className="font-poppins capitalize font-medium text-[17px]">
          {name}
        </p>
        <div className="uppercase font-poppins text-[14px] flex gap-1.5 leading-none">
          <span className="border-r border-light-1 pr-1.5">{date}</span>
          <span className="border-r border-light-1 pr-1.5">{day}</span>
          <span>{time}</span>
        </div>
        <p className="text-light-1 text-[14px] capitalize">{venue}</p>

        <button className="bg-black w-full py-3 capitalize text-center font-medium text-[12px]">
          {collection}
        </button>
      </div>
    </li>
  );
}

export default MetaTicket;
