import localFont from "next/font/local"

import './globals.css'


const DanaDemiBold = localFont({ src: "./fonts/DanaFaNum-DemiBold.woff2", variable: '--font-DanaDemiBold' })
const DanaMedium = localFont({ src: './fonts/DanaFaNum-Medium.woff2', variable: '--font-DanaMedium' })
const DanaRegular = localFont({ src: "./fonts/DanaFaNum-Regular.woff2", variable: '--font-DanaRegular' })

const MorabbaBold = localFont({ src: './fonts/Morabba-Bold.woff2', variable: '--font-MorabbaBold' })
const MorabbaLight = localFont({ src: './fonts/Morabba-Light.woff2', variable: '--font-MorabbaLight' })
const MorabbaMedium = localFont({ src: './fonts/Morabba-Medium.woff2', variable: '--font-MorabbaMedium' })

export const metadata = {
  title: 'Coffe Shop',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" >
      <body className={`font-DanaRegular bg-gray-100 dark:bg-zinc-800
      ${DanaDemiBold.variable} 
      ${DanaMedium.variable} 
      ${DanaRegular.variable} 
      ${MorabbaBold.variable} 
      ${MorabbaLight.variable} 
      ${MorabbaMedium.variable} 
      `}>{children}</body>
    </html>

  )
}
