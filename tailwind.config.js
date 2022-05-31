module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm': 'IBM Plex Mono'
      },
      colors:{
        'blue' : '#4842FF',
        'violet': '#DB52F7',
        'p' : 'rgba(255, 255, 255, 0.75)',
        'dark': '#0603217D',
        'card': '#1A1452'
      }
    },
    
  },
  plugins: [],
}