/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      custom1: [
        // "-apple-system",
        // "BlinkMacSystemFont",
        // "Segoe UI",
        // "Roboto",
        // "Oxygen",
        "Ubuntu",
        // "system-ui",
        // "Cantarell",
        // "Open Sans",
        // "Helvetica Neue",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
