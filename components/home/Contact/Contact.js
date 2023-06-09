import React from "react"
import styles from "@/components/home/Contact/Contact.module.css"
import Form from "./Form"

const Contact = () => {
  return (
    <div className={`contentSectionContainer smallBlockSpace`}>
      <h1 className={styles.title}>Contact us</h1>
      <Form></Form>
    </div>
  )
}

export default Contact
