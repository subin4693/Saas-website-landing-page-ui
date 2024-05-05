/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "dm-sans": ["DM Sans", "sans-serif"],
      "inter":["Inter","sans-serif"]
    },
    colors:{
      "dark": "#000",
      "dark-1":"#7B7B7B", 
      "dark-2" : "#BCBCBC",

      "light": "#FFFF",
      "light-1": "#EAEEFE",  
      "light-2":"#D2DCFF",

      "primary-1": "#001354",
      "primary-2":"#010D3E",

      "purple-100":"#6F6C90",

      "gradient-1":"#DD7DFF",
      "gradient-2":"#E1CD86",
      "gradient-3":"#8BCB92",
      "gradient-4":"#71C2EF",
      "gradient-5":"#3BFFFF",
      "gradient-6":"#183EC2" 
    },
    extend: {},
  },
  plugins: [],
}