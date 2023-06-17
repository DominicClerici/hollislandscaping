import { Inter } from "next/font/google"
import localFont from "next/font/local"
import Header from "@components/Universal/Header/Header"
import styles from "./global.css"
import Head from "next/head"

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
  robots: "all",
  googlebot: "all",
  google: "nositelinkssearchbox",
  "google-site-verification": "fft1nfHhHvN5tBCg6G3d5G2W6OzJYmhZVq7HXpblvM8",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <Head>
        <meta name="robots" content="all"></meta>
        <meta name="googlebot" content="all"></meta>
        <meta
          name="google-site-verification"
          content="fft1nfHhHvN5tBCg6G3d5G2W6OzJYmhZVq7HXpblvM8"
        ></meta>
      </Head>
      <body>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  )
}
