import React from "react";
import CollectionList from "./CollectionList";
import { ticketsData } from "../data/data";

function SpotLight() {
  return (
    <section className="w-[1241px] m-auto bg-gradient-to-b from-dark-2 to-dark-3 mt-5 p-10">
      <div className="w-[915px] m-auto">
        <h2 className="text-center font-poppins font-bold text-[50px] capitalize">
          collection spotlight
        </h2>
        <p className="text-[14px] text-center mb-10 mt-2">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        <CollectionList data={ticketsData} />
      </div>
    </section>
  );
}

export default SpotLight;
