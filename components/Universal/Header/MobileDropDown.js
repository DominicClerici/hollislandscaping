"use client"
import React, { useEffect, useState } from "react"
import styles from "@/components/Universal/Header/MobileDropDown.module.css"
import facebookImg from "@/app/facebook.webp"
import locationImg from "@/app/location.webp"
import Image from "next/image"

const MobileDropDown = () => {
  const [contentsOpen, setContentsOpen] = useState(false)
  const contentStatusChanger = (e) => {
    if (contentsOpen) {
      setContentsOpen(false)
    } else {
      if (e.target.id == "hamburger") {
        setContentsOpen(true)
      }
    }
  }
  useEffect(() => {
    document.addEventListener("click", contentStatusChanger)
    return () => {
      document.removeEventListener("click", contentStatusChanger)
    }
  }, [contentStatusChanger])

  return (
    <div className={`${styles.contents} ${contentsOpen ? styles.open : ""}`}>
      <a className={styles.contacts} href="mailto:hollis.landscape@gmail.com">
        hollis.landscape@gmail.com
      </a>
      <a className={styles.contacts} href="tel:510-774-5911">
        (510) 774-5911
      </a>
      <nav className={styles.navContainer}>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact" className={styles.consultButton}>
          Schedule a Consultation
        </a>
      </nav>
      <div className={styles.socials}>
        <a href="https://www.facebook.com/hollislandscapingservice/">
          <Image src={facebookImg}></Image>
        </a>
        <a href="https://maps.google.com/?cid=863642886146597950">
          <Image src={locationImg}></Image>
        </a>
      </div>
    </div>
  )
}

export default MobileDropDown
