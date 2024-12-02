import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        80: "80%",
        62: "62%",
        95: "95%",
        60: "60%",
        82: "82%",
        27: "27%",
        67: "67%",
        40: "40%",
        45: "45%",
        69: "69%",
      },
      borderWidth: {
        1: "1px",
      },
      maxHeight: {
        300: "725px",
        668: "668px",
      },
      backgroundColor: {
        bluebg: "#17a3b3",
      },
    },
  },
  plugins: [],
};
export default config;
