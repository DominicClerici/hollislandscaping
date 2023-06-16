"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import styles from "@/components/home/Projects/Parallax.module.css"
import img from "@app/otherBackground.jpg"

const Parallax = () => {
  const eventHandler = () => {
    let el = document.getElementById("parallaxImage")
    // means background, made it b to type faster
    let b = el.getBoundingClientRect()
    let h = window.innerHeight
    // start effect when top goes negative, end when bottom goes negative
    // console.log(b.top - h, b.bottom)
    if (b.top - h < 0 && b.bottom > 0) {
      //   console.log(b.bottom - b.top)
      //   console.log(b.bottom)
      //   document.body.scrollHeight
      //   console.log(b.top - h + b.bottom)
      el.style.top =
        ((b.top - h + b.bottom) / (b.bottom - b.top)) * 10 * -5 + "%"
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", eventHandler)

    return () => {
      document.removeEventListener("scroll", eventHandler)
    }
  }, [eventHandler])
  return (
    <div className={styles.container}>
      <h1 className={`${styles.text} title`}>Previous Projects</h1>
      <div className={styles.overlay}></div>
      <Image
        id="parallaxImage"
        src={img}
        height="900"
        width="1600"
        alt="some image"
        className={styles.image}
      ></Image>
    </div>
  )
}

export default Parallax
