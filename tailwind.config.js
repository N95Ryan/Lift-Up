/** @type {import('tailwindcss').Config} */
const { gluestackPlugin } = require('@gluestack-ui/nativewind-utils/tailwind-plugin');

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", // Ajoute selon ta structure
  ],
  theme: {
    extend: {},
  },
  plugins: [gluestackPlugin],
};