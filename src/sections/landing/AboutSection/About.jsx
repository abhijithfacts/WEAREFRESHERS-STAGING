import React from "react";
import styles from "./aboutSection.module.css";
import Button from "../../../components/Buttons/Button";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutParagraphWrap}>
        <div className={styles.titleContainer}>
          <h5 className={styles.aboutTitleTop}>Getting</h5>
          <h5 className={styles.aboutTitleBottom}>fresher</h5>
        </div>
        <div className={styles.aboutGreenLineContainer}>
          <h6 className={styles.greenLineText}>About Us</h6>
          <div className={styles.aboutGreenLine}></div>
        </div>
        <p className={styles.aboutParagraph}>
          At Fresher, we're passionate about bringing the beauty of fresh
          flowers directly from the farm to your doorstep. We bridge the gap
          between flower shops, online retailers, and the source, offering a
          seamless and reliable supply chain for the freshest blooms available.
        </p>
      </div>

      <div className={styles.cardsSection}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default About;

// cards for mapping
const Cards = () => {
  return (
    <div className={styles.card}>
      <h4 className={styles.cardHeading}>Countries</h4>
      <p className={styles.cardParagraph}>
        A brief explanation here. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <Button
        className={styles.cardButton}
        bg={"#c9deb1"}
        text={"Learn More"}
      />
    </div>
  );
};
