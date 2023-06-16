import React from "react"
import styles from "@/components/home/Contact/Contact.module.css"
import Form from "./Form"

const Contact = () => {
  return (
    <section className={`contentSectionContainer smallBlockSpace`}>
      <h1 id="contact" className="title">
        Contact us
      </h1>
      <Form></Form>
    </section>
  )
}

export default Contact
