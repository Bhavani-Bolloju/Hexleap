"use client";

import Sports from "@/components/sports/Sports";
import { data } from "@/components/data/data";
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
        className="absolute right-[10%] bg-light-1 rounded-xl w-14 h-7 flex border-2 border-dark-2 hover:scale-105 transition-transform duration-150 outline-none"
        onClick={handleTheme}
      >
        <div
          className={`w-8 h-full bg-dark-4 rounded-lg ${
            darkTheme ? "translate-x-0" : "translate-x-[65%]"
          } transition-transform duration-200 ease-out`}
        ></div>
      </button>
      <section className="w-[1444px] m-auto mt-10">
        <Sports darkTheme={darkTheme} data={data}></Sports>
      </section>
      <section className="w-[1444px] m-auto mt-16">
        <SpotLight darkTheme={darkTheme} />
      </section>
    </main>
  );
}
