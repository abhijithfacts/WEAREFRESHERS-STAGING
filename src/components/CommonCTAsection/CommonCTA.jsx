import React from "react";
import styles from "./commonCTA.module.css";
import Button from "../Buttons/Button";
import Image from "next/image";

const CommonCTA = ({ heading, paragraph, image = "/images/cta-image.png" }) => {
  return (
    <div className={styles.commonCTAcontainer}>
      <div className={styles.commonCtaLeftSection}>
        <h4 className={styles.commonCtaHeading}>{heading}</h4>
        <p className={styles.commonCtaPara}>{paragraph} </p>
        <div className={styles.commonCtaButtonHolder}>
          <Button text={"View more"} />
        </div>
      </div>
      <div className={styles.commonCtaRightSection}>
        <Image
          src={image}
          alt="CTA-image"
          className={styles.commonCtaImage}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default CommonCTA;
