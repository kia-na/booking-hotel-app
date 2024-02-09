/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      boxShadow: {
        dropdown: "rgba(60, 64, 67, 0.2) 1px 2px 9px .5px",
        blueShadow: "rgba(28, 78, 216, 1) 1px 2px 9px .5px",
        blueShadowSm: "rgba(28, 78, 216, 1) 0px 0px 5px .5px",
      },
    },
  },
  plugins: [],
};
