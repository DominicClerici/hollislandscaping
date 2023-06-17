"use client"
import React, { useEffect } from "react"
import styles from "@/components/home/HelloSection/VideoDisplay.module.css"

const VideoDisplay = () => {
  useEffect(() => {
    console.log(window.innerWidth)
    if (window.innerWidth > 768) {
      document.getElementById("hello-video").setAttribute("autoplay", "")
      document.getElementById("hello-video").play()
    }
  }, [])

  return (
    <div className={styles.videoContainer}>
      <div className={styles.overlay}></div>
      <video
        id="hello-video"
        className={styles.video}
        poster={
          "https://static.wixstatic.com/media/11062b_4e53927ddddf4c0ea62e0b87954e44dcf000.jpg/v1/fill/w_320,h_877,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_4e53927ddddf4c0ea62e0b87954e44dcf000.jpg"
        }
        preload="none"
        muted
        loop
      >
        <source
          type="video/mp4"
          src="https://video.wixstatic.com/video/11062b_4e53927ddddf4c0ea62e0b87954e44dc/1080p/mp4/file.mp4"
        ></source>
        <track kind="captions"></track>
      </video>
    </div>
  )
}

export default VideoDisplay
