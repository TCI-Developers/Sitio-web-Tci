// tailwind.config.js
import withMT from "@material-tailwind/react/utils/withMT.js";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [],
});
