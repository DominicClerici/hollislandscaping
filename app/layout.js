import { Inter } from "next/font/google"
import localFont from "next/font/local"
import Header from "@components/Universal/Header/Header"
import styles from "./global.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
const satoshi = localFont({
  src: "./Satoshi-Variable.ttf",
  display: "swap",
  variable: "--font-satoshi",
})

export const metadata = {
  title: "Hollis Landscaping - Commercial & Residential",
  description:
    "The Best Professional Landscape Maintenance And Design Services For Residential and Commercial Properties",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  )
}
