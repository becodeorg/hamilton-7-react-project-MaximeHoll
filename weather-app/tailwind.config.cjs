/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'galaxy': "url('https://unsplash.com/photos/f-DvU93UhTs/download?ixid=MnwzODUyNzl8MHwxfHNlYXJjaHwxfHxCYXJjZWxvbmF8ZW58MHx8fHwxNjY5ODAyMTUx')",
        
      }
    },
  },
  plugins: [],
}
