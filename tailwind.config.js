/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkBlue: '#03045E',
        DarkBrown: '#474306',
        Yellow: '#F5EE84',
        LightYellow: '#FBF8CC',
      },
    },
  },
  plugins: [],
}