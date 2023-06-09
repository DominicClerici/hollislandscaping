"use client"
import React, { useEffect } from "react"
import styles from "@/components/home/About/About.module.css"
import Image from "next/image"
import img from "@app/otherbackground2.webp"

const Parallax = () => {
  const eventHandler = (e) => {
    let el = document.getElementById("aboutParallax")
    // means background, made it b to type faster

    let b = el.getBoundingClientRect()
    let h = window.innerHeight
    // let height = b.bottom - b.top
    // console.log(b.top - h) needs to be less than 0 -> < 0
    // console.log(b.bottom) needs to be more than 0 -> > 0

    if (b.top - h < 0 && b.bottom > 0) {
      //   console.log(b.bottom - b.top)
      //   console.log(b.bottom)
      //   document.body.scrollHeight
      //   console.log(b.top - h + b.bottom)
      el.style.top =
        ((b.top - h + b.bottom) / (b.bottom - b.top)) * 10 * -3 + "%"
    }
    // start effect when top goes negative, end when bottom goes negative
  }
  useEffect(() => {
    document.addEventListener("scroll", eventHandler)

    return () => {
      document.removeEventListener("scroll", eventHandler)
    }
  }, [eventHandler])

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Image
        id="aboutParallax"
        src={img}
        fill
        alt="some image"
        className={styles.image}
      ></Image>
    </div>
  )
}

export default Parallax
