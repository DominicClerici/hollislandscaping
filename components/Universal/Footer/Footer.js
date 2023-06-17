import React from "react"
import styles from "@/components/Universal/Footer/Footer.module.css"
import facebookImg from "@/app/facebook.webp"
import locationImg from "@/app/location.webp"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <a href="mailto:hollis.landscape@gmail.com">
        <span className="clickableText">hollis.landscape@gmail.com</span>
      </a>
      <a href="tel:510-774-5911">
        <span className="clickableText">(510) 774-5911</span>
      </a>
      <a>132 Meadow Ln, Orinda, CA 94563, USA</a>
      <div>
        <a href="https://www.facebook.com/hollislandscapingservice/">
          <Image src={facebookImg}></Image>
        </a>
        <a href="https://maps.google.com/?cid=863642886146597950">
          <Image src={locationImg}></Image>
        </a>
      </div>
      <a>Made with love, by D.C code</a>
    </footer>
  )
}

export default Footer
