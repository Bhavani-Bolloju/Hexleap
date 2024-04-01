import React from "react";
import Image from "next/image";
import { TicketsInterface } from "./SpotLight";

interface MetaTickerInterface extends TicketsInterface {
  darkTheme: boolean;
}
function MetaTicket({
  name,
  day,
  date,
  time,
  collection,
  image,
  venue,
  darkTheme
}: MetaTickerInterface) {
  return (
    <div
      className={`min-w-[257px]  h-fill ${
        darkTheme ? "bg-dark-4 " : "bg-white text-black"
      }  transition-colors duration-150 py-4 grow `}
    >
      <div className=" p-1 m-auto flex items-center justify-center h-full w-full max-[400px]:w-[200px] max-[400px]:h-auto ">
        <Image
          // className="w-full h-[100%] max-[450px]:w-auto"
          className="h-auto w-[100%] bg-cover max-[650px]:w-full max-[650px]:h-full "
          src={image}
          alt={name}
        />
      </div>
      <div
        className={`w-[80%] m-auto border-dashed relative border-b-2 after:content-[''] after:bg-dark-3 after:w-6 after:h-6 after:absolute after:top-1/2 
        before:content-[''] before:bg-dark-3 before:w-6 before:h-6 before:absolute before:top-1/2 before:left-0 after:right-0 after:translate-y-[-50%]
        before:translate-y-[-50%] after:rounded-full before:rounded-full after:translate-x-10 before:-translate-x-10 ${
          darkTheme
            ? "after:bg-dark-3 before:bg-dark-3 border-dark-6 "
            : "after:bg-light-2 before:bg-light-2 border-dark-7"
        }`}
      ></div>
      <div className="flex flex-col justify-between text-center px-5 mt-5 items-center gap-3">
        <p className="font-poppins capitalize font-medium text-[17px]">
          {name}
        </p>
        <div className="uppercase font-poppins text-[14px] flex gap-1.5 leading-none">
          <span
            className={`border-r ${
              darkTheme ? "border-light-1" : "border-black"
            }  pr-1.5`}
          >
            {date}
          </span>
          <span
            className={`border-r ${
              darkTheme ? "border-light-1" : "border-black"
            }  pr-1.5`}
          >
            {day}
          </span>
          <span>{time}</span>
        </div>
        <p
          className={` text-[14px] capitalize ${
            darkTheme ? "text-light-1" : "text-dark-5"
          }`}
        >
          {venue}
        </p>

        <button
          className={`bg-black w-full py-3 capitalize text-center font-medium text-[12px] text-white  `}
        >
          {collection}
        </button>
      </div>
    </div>
  );
}

export default MetaTicket;
