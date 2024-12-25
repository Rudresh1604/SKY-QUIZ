const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Ensure the main HTML file is included
    "./src/**/*.{js,ts,jsx,tsx,html}", // Only include relevant source files
    flowbite.content(), // Ensure Flowbite's content is included
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Ensure Flowbite's plugin is included
  ],
};
