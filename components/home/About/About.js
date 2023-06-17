import React from "react"
import styles from "@/components/home/About/About.module.css"
import Parallax from "./Parallax"

const About = () => {
  return (
    <div className={styles.fullWidthSection}>
      <Parallax></Parallax>
      <div
        id="about"
        className={`${styles.normalSection} contentSectionContainer`}
      >
        <h1 className="title">About Us</h1>
        <p className="paragraph">
          Hollis Landscaping has over 25 years of experience serving the
          maintenance and design needs of the bay area. We work closely with our
          clients to make their designs come to life, providing both a
          consultative and satisfying landscape that you can enjoy for many
          years.
        </p>
        <p className="paragraph">
          We are trained horticulturalists providing the best advice on types of
          trees and plants to use for the desired effect. We consider drought
          tolerance, shade, slope, and drainage in your overall design. So each
          plant that we place has a role in your design, and compliments the
          hardscape, lighting, and irrigation for the desired outcome.
        </p>
        <p className="paragraph">
          Hollis Landscaping relies on strategic partnerships with local
          providers for the landscape materials we use. We have relationships
          with nurseries, irrigation suppliers and landscape supply companies,
          enabling us to have very timely access to the best materials for your
          project. As a result, our landscape maintenance and design projects
          are completed efficiently and effectively for the best possible cost.
        </p>
        <p className="paragraph">
          We use{" "}
          <a
            href="https://www.horizononline.com/"
            target="_blank"
            className="clickableText"
          >
            state-of-the-art machinery
          </a>{" "}
          and equipment necessary to do every landscape job right the first
          time, and we pride ourselves for ensuring thorough clean-up after
          every project.
        </p>
        <p className={styles.extraInfo}>
          <a
            href="https://landscape.calpoly.edu/"
            target="_blank"
            className="clickableText"
          >
            Cal Poly Bachelor of Science
          </a>
          <br></br> Landscape Architect Licensed Landscape Architect: LA # 4670
          Contractor License: # C27, B
        </p>
        <p className={styles.extraInfo}>
          <strong>
            We use only quality products on your maintenance and landscape
            design project:
          </strong>
          <br></br>
          <br></br>{" "}
          <a
            href="https://thebrickyard.com/"
            target="_blank"
            className="clickableText"
          >
            BRICKYARD BUILDING MATERIALS
          </a>{" "}
          -{" "}
          <a
            href="https://ccl-organics.hub.biz/"
            target="_blank"
            className="clickableText"
          >
            CCL ORGANICS
          </a>{" "}
          -{" "}
          <a
            href="https://www.deltabluegrass.com/"
            target="_blank"
            className="clickableText"
          >
            DELTA BLUEGRASS DEVIL MOUNTAIN NURSURY
          </a>{" "}
          -{" "}
          <a
            href="https://www.horizononline.com/"
            target="_blank"
            className="clickableText"
          >
            HORIZON
          </a>{" "}
          -{" "}
          <a
            href="https://lhvoss.com/"
            target="_blank"
            className="clickableText"
          >
            LH VOSS MATERIALS WATERSAVERS IRRIGATION
          </a>
        </p>
      </div>
    </div>
  )
}

export default About
