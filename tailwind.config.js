/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ultraSm: "300px",
        foldSize: "280px",
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      abc: ['Plus Jakarta Sans', 'sans-serif'],
    },
  },
  daisyui: {
    themes: ["cmyk"],
  },
  plugins: [require("daisyui")],
}