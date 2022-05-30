module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'DM Sans'
      },
      colors:{
        'blue' : '#4842FF',
        'violet': '#DB52F7',
      }
    },
    
  },
  plugins: [],
}