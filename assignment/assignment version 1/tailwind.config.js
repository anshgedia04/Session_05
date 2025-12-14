/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: "#2c2c2c",
        darkgray: "#a9a9a9",
        lightsteelblue: "#bfdbff",
      },
      spacing: {
        "num-454": "454px",
        "num-278": "278px",
        "num-7": "7px",
        "num-431": "431px",
        "num-221": "221px",
        "num-1": "1px solid #a9a9a9",
      },
      fontFamily: {
        roboto: "Roboto",
        rubik: "Rubik",
      },
      borderRadius: {
        "num-4": "4px",
      },
      padding: {
        "num-0": "0px",
        "num-42": "42px",
        "num-65": "65px",
        "num-15": "15px",
        "num-20": "20px",
        "num-82": "82px",
      },
    },
    fontSize: {
      "num-18": "18px",
      "num-34": "34px",
      "num-48": "48px",
      "num-38": "38px",
      "num-29": "29px",
      "num-24": "24px",
      "num-19": "19px",
      "num-42": "42px",
      "num-25": "25px",
      "num-16": "16px",
      "num-14": "14px",
    },
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq850: {
        raw: "screen and (min-width: 451px) and (max-width: 850px)",
      },
      mq1225: {
        raw: "screen and (min-width: 851px) and (max-width: 1225px)",
      },
      mq1525: {
        raw: "screen and (min-width: 1226px) and (max-width: 1525px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
