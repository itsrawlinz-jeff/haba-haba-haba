/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  
  ],
  theme: {
    extend: {
      colors: {
        "vivid-raspberry": "#FF0066",
        "cultured": "#F8F8F8"
      }, 
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
