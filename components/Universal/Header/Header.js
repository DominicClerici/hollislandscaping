import Image from "next/image"
import React from "react"
import img from "@/app/hollisLogo.webp"
import styles from "@/components/Universal/Header/Header.module.css"
import facebookImg from "@/app/facebook.webp"
import locationImg from "@/app/location.webp"
import MobileDropDown from "./MobileDropDown"
import hamburgerImg from "@/app/hamburger.png"

const Header = () => {
  return (
    <>
      <div className={styles.desktopContainer}>
        <header className={styles.headerContainer}>
          <div className={styles.leftSide}>
            <Image src={img}></Image>
            <div className={styles.nameContainer}>
              <h2>Hollis Landscaping</h2>
              <h1>Landscape Maintenance and Design</h1>
            </div>
            <div className={styles.socialContainer}>
              <div className={styles.contactsInformation}>
                <a href="mailto:hollis.landscape@gmail.com">
                  hollis.landscape@gmail.com
                </a>
                <a href="tel:510-774-5911">(510) 774-5911</a>
              </div>
              <div>
                <a href="https://www.facebook.com/hollislandscapingservice/">
                  <Image src={facebookImg}></Image>
                </a>
                <a href="https://maps.google.com/?cid=863642886146597950">
                  <Image src={locationImg}></Image>
                </a>
              </div>
            </div>
          </div>
          <nav className={styles.navContainer}>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact" className={styles.consultButton}>
              Schedule a Consultation
            </a>
          </nav>
        </header>
      </div>
      <div className={styles.mobileContainer}>
        <header className={styles.headerContainer}>
          <div className={styles.leftSide}>
            <div className={styles.mobileThing}>
              <Image width="50" src={img}></Image>
              <div className={styles.nameContainer}>
                <h2>Hollis Landscaping</h2>
                <h1>Landscape Maintenance and Design</h1>
              </div>
            </div>
            {/* <div className={styles.socialContainer}>
              <div className={styles.contactsInformation}>
                <a href="mailto:hollis.landscape@gmail.com">
                  hollis.landscape@gmail.com
                </a>
                <a href="tel:510-774-5911">(510) 774-5911</a>
              </div>
              <div>
                <a href="https://www.facebook.com/hollislandscapingservice/">
                  <Image src={facebookImg}></Image>
                </a>
                <a href="https://maps.google.com/?cid=863642886146597950">
                  <Image src={locationImg}></Image>
                </a>
              </div>
            </div> */}
            <div className={styles.hamburger}>
              <Image id="hamburger" src={hamburgerImg} fill></Image>
            </div>
          </div>
          {/* <nav className={styles.navContainer}>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact" className={styles.consultButton}>
            Schedule a Consultation
            </a>
        </nav> */}
          <MobileDropDown></MobileDropDown>
        </header>
      </div>
    </>
  )
}

export default Header
// Hollis Landscaping
// LANDSCAPE MAINTENANCE AND DESIGN
