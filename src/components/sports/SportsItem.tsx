import React from "react";
import Image from "next/image";
import { Team } from "./Sports";

interface SportsItemInterface extends Team {
  darkTheme: boolean;
}

function SportsItem({
  name,
  sport,
  events,
  image,
  darkTheme
}: SportsItemInterface) {
  return (
    <li
      className={`max-w-[350px] w-[237px]  p-3 ${
        darkTheme ? "bg-dark-4" : "bg-white"
      }  transition-colors duration-150 grow `}
    >
      <div className="max-h-[420px] w-auto flex justify-center">
        <Image
          className="bg-cover h-auto w-full max-[400px]:w-auto"
          src={image}
          alt={name}
        />
      </div>
      <p
        className={`capitalize font-medium text-[17px] my-4 ${
          darkTheme ? "text-white" : "text-black"
        }  transition-colors duration-150`}
      >
        {name}
      </p>
      <div
        className={` flex justify-between p-2 ${
          darkTheme ? "bg-dark-1" : "bg-light-2"
        }  transition-colors duration-150`}
      >
        <div className="flex flex-col gap-[1px]">
          <span
            className={`capitalize text-[12px] font-normal ${
              darkTheme ? "text-light-1 " : "text-dark-5"
            }  transition-colors duration-150`}
          >
            total events
          </span>
          <span
            className={`font-medium text-[14px] capitalize ${
              darkTheme ? "text-white" : "text-black"
            }  transition-colors duration-150`}
          >
            {events} events
          </span>
        </div>
        <div className="flex flex-col gap-[1px]">
          <span
            className={`capitalize text-[12px] font-normal ${
              darkTheme ? "text-light-1 " : "text-dark-5"
            }  transition-colors duration-150`}
          >
            sports
          </span>
          <span
            className={`font-medium text-[14px] capitalize ${
              darkTheme ? "text-white" : "text-black"
            }  transition-colors duration-150`}
          >
            {sport}
          </span>
        </div>
      </div>
    </li>
  );
}

export default SportsItem;
