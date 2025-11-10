import React from "react";
import styles from "./freshervoice.module.css";
import Button from "../../../components/Buttons/Button";
import Image from "next/image";

const FresherVoice = () => {
  return (
    <div className={styles.fvContainer}>
      <div className={styles.fvParagraphWrap}>
        <div className={styles.titleContainer}>
          <h5 className={styles.fvTitleTop}>fresher</h5>
          <h5 className={styles.fvTitleBottom}>voice</h5>
        </div>
        <div className={styles.titleContainerMobile}>
          <h5 className={styles.fvTitleTop}>Getting fresher</h5>
        </div>
        <div className={styles.fvGreenLineContainer}>
          <h6 className={styles.greenLineText}>Latest News</h6>
          <div className={styles.fvGreenLine}></div>
        </div>
        <p className={styles.fvParagraph}>
          A brief explanation here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </div>

      <div className={styles.cardsSection}>
        <Cards />
        <div className={styles.cardSeparator}></div>
        <Cards />
        <div className={styles.cardSeparator}></div>
        <Cards />
        <div className={styles.cardSeparator}></div>
        <Cards />
      </div>
    </div>
  );
};

export default FresherVoice;

// cards for mapping
const Cards = () => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.cardImage}
        src="/images/card.jpg"
        alt="card-image"
        width={200}
        height={100}
      />
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
