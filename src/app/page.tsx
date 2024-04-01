"use client";

import Sports from "@/components/sports/Sports";
import { data, ticketsData } from "@/components/data/data";
import SpotLight from "@/components/sportlight/SpotLight";
import { useState } from "react";
export default function Home() {
  const [darkTheme, setDarkTheme] = useState(true);

  const handleTheme = function () {
    setDarkTheme((prev) => !prev);
  };

  const themeClass = darkTheme ? "bg-dark-1" : "bg-light-2";

  return (
    <main
      className={`relative py-10 ${themeClass} transition-colors duration-150`}
    >
      <button
        className="fixed right-[5%] bg-light-2 rounded-2xl w-20 h-8 flex border-2 border-dark-1  transition-transform duration-200 outline-none ease-in-out delay-75 items-center"
        onClick={handleTheme}
      >
        <div
          className={`w-10 h-8 bg-dark-4 rounded-2xl ${
            darkTheme ? "translate-x-[-1px]" : "translate-x-[92%]"
          } transition-transform duration-200 ease-out relative z-20`}
        ></div>
        <div className="flex justify-between items-center absolute w-full top-1/2 left-1/2 translate-x-[-50%] tra translate-y-[-50%] px-2 z-10">
          {/* dark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-dark-5 fill-dark-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
          {/* light */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-dark-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </div>
      </button>
      <section className="px-10 mt-10">
        <Sports darkTheme={darkTheme} data={data}></Sports>
      </section>
      <section className="px-10 mt-16">
        <SpotLight darkTheme={darkTheme} data={ticketsData} />
      </section>
    </main>
  );
}
