const withMT = require("@material-tailwind/react/utils/withMT");
 
 module.exports = withMT({
  theme: {
    // Some useful comment
    fontFamily: {
      'rohit': ['Montserrat', 'sans-serif'],
      'roxsir': ['Lilita One', 'sans-serif']
      
    },
  },
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {
      colors: {
        'rohitl': '#00df9a',
      },
      backgroundImage: {
        'bgmg': " url('public/bgmn.jpg')",
      },
     },
   },
   plugins: [],
 });