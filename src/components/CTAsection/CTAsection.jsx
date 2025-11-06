import React from "react";
import styles from "./ctaStyles.module.css";
import Button from "../Buttons/Button";
import Image from "next/image";

const CTAsection = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaLeftSection}>
        <h4 className={styles.ctaHeading}>CTA heading</h4>
        <p className={styles.ctaPara}>
          Sub heading goes here Max two lines Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,{" "}
        </p>
        <div className={styles.ctaButtonHolder}>
          <Button text={"View more"} />
        </div>
      </div>
      <div className={styles.ctaRightSection}>
        <Image
          src="/images/cta-image.png"
          alt="CTA-image"
          className={styles.ctaImage}
          width={100}
          height={200}
        />
      </div>
    </div>
  );
};

export default CTAsection;
