import React from "react";
import MetaTicket from "./MetaTicket";
// import rightArrow from "../../assets/right-arrow.svg";
// import leftArrow from "../../assets/left-arrow.svg";
// import Image from "next/image";
import { TicketsCollectionInterface } from "./SpotLight";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import Splide from "@splidejs/react-splide";
// import SplideSlide from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function CollectionList(props: TicketsCollectionInterface) {
  return (
    <div className="px-5 relative max-[450px]:px-0">
      {/* <button className="absolute top-1/2 left-[-5%] border border-accent">
        <Image
          src={leftArrow}
          alt="left arrow"
          className="w-full h-full bg-cover"
        />
      </button> */}
      <div className="list-none flex  gap-10 justify-between">
        <Splide
          hasTrack={true}
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            speed: 2000,
            rewindSpeed: 1500,
            rewind: true,
            // autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            width: "100%",
            height: "100%",
            gap: "20px",
            breakpoints: {
              1110: {
                perPage: 2
              },
              700: {
                perPage: 1
              }
            }
          }}
        >
          {props.data.map((el, i) => (
            <SplideSlide key={i}>
              <MetaTicket
                name={el.name}
                date={el.date}
                day={el.day}
                time={el.time}
                venue={el.venue}
                collection={el.collection}
                image={el.image}
                darkTheme={props.darkTheme}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* <button className="absolute top-1/2 right-[-5%] border border-accent p-2">
        <Image
          src={rightArrow}
          alt="left arrow"
          className="w-full h-full bg-cover"
        />
      </button> */}
    </div>
  );
}

export default CollectionList;
