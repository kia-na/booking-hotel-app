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
      },
    },
  },
  plugins: [],
};
