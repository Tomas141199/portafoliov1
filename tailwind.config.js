/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0a192f",
          secondary: "#05fdd8",
          accent: "#64ffda",
          neutral: "#909096",
          "base-100": "#0a192f",
          info: "#fd2155",
          success: "#8892b0",
          warning: "#112240",
          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0a192f",
        "gray-font": "#909096",
        "primary-pink": "#fd2155",
        "primary-green": "#05fdd8",
        "blue-font": "#8892b0",
        "extralight-gray": "#ccd6f6",
        "base-100": "#ccd6f6",
        "primary-aqua": "#64ffda",
        "blue-light": "#0000",
      },

      spacing: {
        tiny: "0.122rem",
        extratiny: "0.07rem",
        100: "26rem",
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
