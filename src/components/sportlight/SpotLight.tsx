import React from "react";
import CollectionList from "./CollectionList";
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

export interface TicketsCollectionInterface {
  data: TicketsInterface[];
  darkTheme: boolean;
}

function SpotLight(props: TicketsCollectionInterface) {
  const linearGradiantClass = props.darkTheme
    ? "bg-gradient-to-b from-dark-2 to-dark-3"
    : "bg-gradient-to-b from-light-3 to-light-4";

  return (
    <section className={`w-[1241px] m-auto ${linearGradiantClass}  mt-5 p-10`}>
      <div
        className={`w-[915px] m-auto ${
          props.darkTheme ? "text-white" : "text-black"
        }`}
      >
        <h2
          className={`text-center font-poppins font-bold text-[50px] capitalize `}
        >
          collection spotlight
        </h2>
        <p className="text-[14px] text-center mb-10 mt-2">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        <CollectionList darkTheme={props.darkTheme} data={props.data} />
      </div>
    </section>
  );
}

export default SpotLight;
