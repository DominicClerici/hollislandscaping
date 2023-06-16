import React from "react"
import styles from "@/components/home/Projects/PreviousProject.module.css"
import Image from "next/image"
import img from "@/app/img1.webp"

const PreviousProject = ({ invert, children, location, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div
          className={`${styles.col} ${invert ? styles.second : styles.first}`}
        >
          <div className="location">{location}</div>
          <div className="paragraph">{children}</div>
        </div>
        <div
          className={`${styles.col} ${invert ? styles.first : styles.second}`}
        >
          <Image className={styles.image} src={image} alt="an image"></Image>
        </div>
      </div>
    </div>
  )
}

export default PreviousProject
