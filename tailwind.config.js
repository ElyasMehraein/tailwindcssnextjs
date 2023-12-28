/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors :{
        brown:{
          100:"#ECE0D1",
          300:"#DBC1AC",
          600:"#967259",
          900:"#634832"
          
        }
      },
      boxShadow:{
        "customShadow":"0px 1px 10px 0px #0000000D"

      },
      borderRadius:{
        "customRounded":"2rem"
      },
      fontFamily: {
        DanaDemiBold: ['var(--font-DanaDemiBold)'],
        DanaMedium: ['var(--font-DanaMedium)'],
        DanaRegular: ['var(--font-DanaRegular)'],
        MorabbaBold: ['var(--font-MorabbaBold)'],
        MorabbaLight: ['var(--font-MorabbaLight)'],
        MorabbaMedium: ['var(--font-MorabbaMedium)'],
      },
          
    },
  },
  plugins: [],
}
