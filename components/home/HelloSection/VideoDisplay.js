import React from "react"
import styles from "@/components/home/HelloSection/VideoDisplay.module.css"

const VideoDisplay = () => {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.overlay}></div>
      <video className={styles.video} autoPlay muted loop>
        <source
          type="video/mp4"
          src="https://video.wixstatic.com/video/11062b_4e53927ddddf4c0ea62e0b87954e44dc/1080p/mp4/file.mp4"
        ></source>
      </video>
    </div>
  )
}

export default VideoDisplay
