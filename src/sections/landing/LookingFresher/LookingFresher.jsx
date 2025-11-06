import React from "react";
import styles from "./lookingfresher.module.css";
import Image from "next/image";
import Button from "../../../components/Buttons/Button";

const LookingFresher = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.firstSection}>
        <h4 className={styles.sectionTitle}>Looking</h4>
        <div className={styles.sectionTitleSL}>
          <div className={styles.verticalLine}></div>
          <h4 className={styles.sectionTitle}>fresher</h4>
        </div>
      </div>
      <div className={styles.secondSection}>
        <Image
          className={styles.plantImage}
          src="/images/plant-image.png"
          alt="plant-image"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.thirdSection}>
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
};

export default LookingFresher;

// mapping rows

const Row = () => {
  return (
    <div className={styles.rowWrap}>
      <div className={styles.rowTop}>
        <div className={styles.textHolder}>
          <h6 className={styles.rowHeading}>Consistent and Reliable Supply</h6>
          <p className={styles.rowParagraph}>
            Say goodbye to supply chain disruptions
            <br /> and enjoy consistent access to a wide variety of fresh
            flowers.
          </p>
        </div>
        <h2 className={styles.numberWrap}>01</h2>
      </div>
      <div className={styles.rowBottom}>
        <Button text={"Learn more"} bg={"#c9deb1"} />
      </div>
      <div className={styles.greenLineHorizontal}></div>
    </div>
  );
};
