/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cream: "rgb(var(--color-cream), <alpha-value>)",
      beige: "rgb(var(--color-beige), <alpha-value>)",
      orange: "rgb(var(--color-orange), <alpha-value>)",
      green: "rgb(var(--color-green), <alpha-value>)",
      gold: "rgb(var(--color-gold), <alpha-value>)",
      white: "rgb(var(--color-white), <alpha-value>)",
    },
    fontFamily: {
      inter: "var(--font-inter)",
      ibm: "var(--font-ibm)",
    },
    boxShadow: {
      airbnb: "0px 4px 12px rgba(0, 0, 0, 0.08)",
      stripe:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      sketch: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    // extend: {},
  },
  plugins: [],
};
