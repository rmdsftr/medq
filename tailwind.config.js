// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./node_modules/preline/**/*.js", 
  ],
  theme: {
    extend: {
      colors: {
        blueMed: "#2973B2", 
        tosca: "#48A6A7",
      },
    },
  },
  plugins: [
    require('preline/plugin'), 
  ],
}
