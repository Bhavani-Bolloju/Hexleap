import React from "react";
import MetaTicket from "./MetaTicket";
import { StaticImageData } from "next/image";
import rightArrow from "../../assets/right-arrow.svg";
import leftArrow from "../../assets/left-arrow.svg";
import Image from "next/image";
export interface TicketsInterface {
  name: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  collection: string;
  image: StaticImageData;
}

function CollectionList(props: { data: TicketsInterface[] }) {
  return (
    <div className="px-12 relative">
      <button className="absolute top-1/2 left-[-5%] border border-accent p-2">
        <Image
          src={leftArrow}
          alt="left arrow"
          className="w-full h-full bg-cover"
        />
      </button>
      <ul className="list-none flex justify-between">
        {props.data.map((el, i) => (
          <MetaTicket
            key={i}
            name={el.name}
            date={el.date}
            day={el.day}
            time={el.time}
            venue={el.venue}
            collection={el.collection}
            image={el.image}
          />
        ))}
      </ul>
      <button className="absolute top-1/2 right-[-5%] border border-accent p-2">
        <Image
          src={rightArrow}
          alt="left arrow"
          className="w-full h-full bg-cover"
        />
      </button>
    </div>
  );
}

export default CollectionList;
