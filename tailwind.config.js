
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  extend: {
      colors: {
        skyblue: '#87CEEB',
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}