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
    <section
      className={`px-20 ${linearGradiantClass}  mt-5 p-10 transition-colors duration-150 max-[816px]:px-10 max-[700px]:px-20 max-[550px]:px-10 max-[450px]:px-5`}
    >
      <div
        className={`px-40 ${
          props.darkTheme ? "text-white" : "text-black"
        } transition-colors duration-150 max-[1400px]:px-20 max-[1250px]:px-10 max-[1150px]:px-0  `}
      >
        <h2
          className={`text-center font-poppins font-bold text-[50px] capitalize max-[750px]:leading-[1.2] max-[750px]:text-[30px]`}
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
