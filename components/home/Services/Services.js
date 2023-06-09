import React from "react"
import styles from "@/components/home/Services/Services.module.css"

const Services = () => {
  return (
    <div className={styles.background}>
      <div className={styles.backgroundFilter}></div>
      <div className={`contentSectionContainer ${styles.container}`}>
        <h1 className={styles.headerText}>What we can do for you.</h1>
        <div className={styles.row}>
          <div className={styles.col}>
            <p className={styles.paragraph}>
              We offer many services to both our commercial and residential
              customers. With over 25 years of experience serving the San
              Francisco bay area, we are confident that any need you have, can
              be met by us.
            </p>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <ul className={styles.serviceList}>
                <li>Sod</li>
                <li>Sprinklers</li>
                <li>Sprinkler Repair</li>
                <li>Lawn Care</li>
                <li>Weed Control</li>
                <li>Insect and Disease Control</li>
                <li>Mulch Installation</li>
                <li>Shrub and Tree Planting</li>
                <li>Cement and Concrete</li>
              </ul>
              <ul className={styles.serviceList}>
                <li>Driveways</li>
                <li>Walkways</li>
                <li>Patios</li>
                <li>Outdoor Lighting</li>
                <li>Irrigation Systems</li>
                <li>Pools & Spas</li>
                <li>Walls</li>
                <li>Steps</li>
                <li>Drought Tolerant Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
