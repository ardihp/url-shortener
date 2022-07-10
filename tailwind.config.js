/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-cyan": "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        grayish: "hsl(0, 0%, 75%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
        "very-dark-blue": "hsl(255, 11%, 22%)",
      },
      backgroundImage: {
        "shorten-desktop": "url('./resources/images/bg-shorten-desktop.svg')",
        "boost-desktop": "url('./resources/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
