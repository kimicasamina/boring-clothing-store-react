/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: {
        dark: "hsl(var(--color-purple-dark))",
        saturated: "hsl(var(--color-purple-saturated))",
      },
      gray: {
        base: "hsl(var(--color-gray))",
      },
      light: {
        base: "hsl(var(--color-light))",
        darken: "hsl(var(--color-light-darken))",
      },
    },
    screens: {
      mobile: "365px",
      tablet: "800px",
      desktop: "1440px",
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
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    // extend: {},
  },
  plugins: [],
};
