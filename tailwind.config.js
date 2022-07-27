/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0a192f",
          secondary: "#05fdd8",
          accent: "#64ffda",
          neutral: "#909096",
          "base-100": "#ccd6f6",
          info: "#fd2155",
          success: "#8892b0",
          warning: "#ccd6f6",
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
        "primary-aqua": "#64ffda",
      },
    },
  },
  plugins: [require("daisyui")],
};
