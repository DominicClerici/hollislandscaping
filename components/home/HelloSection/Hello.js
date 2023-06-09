import React from "react"
import VideoDisplay from "./VideoDisplay"
import styles from "@/components/home/HelloSection/Hello.module.css"

const Hello = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.videoContainer}>
        <VideoDisplay></VideoDisplay>
      </div>
      <div className={"contentSectionContainer contentsCentered fillContainer"}>
        <h1 className={styles.helloText}>Bring your outdoors to life.</h1>
        <h1 className={styles.subText}>
          Residential and Commercial Landscape Maintenance and Design
        </h1>
      </div>
    </div>
  )
}

export default Hello
