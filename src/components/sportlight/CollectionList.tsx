import React from "react";
import MetaTicket from "./MetaTicket";
import { StaticImageData } from "next/image";
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
  );
}

export default CollectionList;
