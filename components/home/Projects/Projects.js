import React from "react"
import styles from "@/components/home/Projects/Projects.module.css"
import Parallax from "./Parallax"
import PreviousProject from "./PreviousProject"
import WCImage from "@/app/img1.webp"
import lafImage from "@/app/img2.webp"
import oakImage from "@/app/img3.webp"
import LinkButton from "@components/Universal/Buttons"
// import img from "@/app/otherBackground.jpg"

const Projects = () => {
  return (
    <div className={styles.fullWidthSection}>
      <Parallax></Parallax>
      <section className={`contentSectionContainer smallBlockSpace`}>
        <PreviousProject image={WCImage} location={"Walnut Creek, CA"}>
          &quot;Hollis Landscaping was able to take the plans we outlined and
          create a beautiful design that not only maintained the theme of our
          home but brought a renewed energy to our front entrance through the
          use of colorful plants, drought tolerant shrubs, new sod and a lovely
          rock bed. We enjoy coming home now.&quot;
        </PreviousProject>
        <PreviousProject image={lafImage} location={"Lafayette, CA"} invert>
          &quot;Excellent professional landscape maintenance and design service.
          I highly recommend Hollis Landscaping&quot;
        </PreviousProject>
        <PreviousProject image={oakImage} location={"Oakland, CA"}>
          &quot;Very good. Hollis Landscaping is responsive and their regular
          maintenance service has improved my site more than the previous
          contractor.&quot;
        </PreviousProject>
        <LinkButton></LinkButton>
      </section>
    </div>
  )
}

export default Projects
