import React from "react"
import styles from "@/components/Universal/ContentSection.module.css"

const ContentSection = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default ContentSection
