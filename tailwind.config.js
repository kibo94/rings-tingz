/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        'primary': "#B48B7B",
        'grey': "#A6A998"
      },
      height: {
        '400': "400px",
        '200': "200px",
      },
      width: {
        '80%': "80%"
      }
    },
  },
  plugins: [],
};
