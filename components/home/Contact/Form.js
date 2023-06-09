"use client"
import React from "react"
import styles from "@/components/home/Contact/Form.module.css"

const Form = () => {
  const handleSubmit = (e) => {
    console.log(e)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <fieldset className={styles.fieldSet}>
          <div className={styles.row}>
            <input
              className={`${styles.input} ${styles.inARow}`}
              required={true}
              name="name"
              type="text"
              label="Name*"
              maxLength="100"
              placeholder="Name"
            ></input>
            <input
              className={`${styles.input} ${styles.inARow}`}
              required={true}
              maxLength="250"
              label="Email*"
              pattern="^.+@.+\.[a-zA-Z]{2,63}$"
              name="email"
              type="email"
              placeholder="Email*"
            ></input>
            <input
              className={`${styles.input} ${styles.inARow}`}
              maxLength="50"
              label="Phone"
              required={false}
              name="phone"
              type="tel"
              placeholder="Phone"
            ></input>
          </div>
          <input
            className={styles.input}
            maxLength="250"
            label="Address"
            required={false}
            name="address"
            type="text"
            placeholder="Address"
          ></input>
          <input
            className={styles.input}
            label="Subject"
            required={false}
            name="subject"
            type="text"
            placeholder="Subject"
          ></input>
          <textarea
            rows="5"
            className={styles.textArea}
            label="Message"
            required={false}
            name="message"
            placeholder="Message"
          ></textarea>
        </fieldset>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
