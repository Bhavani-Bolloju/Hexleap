import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"]
      },
      colors: {
        "dark-1": "#292B32",
        "dark-2": "#18282A",
        "dark-3": "#221A2C",
        "dark-4": "#3B3E47",
        "light-1": "#DFDFDF",
        "light-2": "#F7F7F8"
      }
    }
  },
  plugins: []
};
export default config;
