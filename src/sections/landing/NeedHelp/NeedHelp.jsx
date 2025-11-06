import React from "react";
import styles from "./needhelp.module.css";
import Button from "../../../components/Buttons/Button";
import Image from "next/image";

const NeedHelp = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaLeftSection}>
        <Image
          src="/images/need-help.png"
          alt="CTA-image"
          className={styles.ctaImage}
          width={100}
          height={200}
        />
      </div>
      <div className={styles.ctaRightSection}>
        <h4 className={styles.ctaHeading}>Need help?</h4>
        <p className={styles.ctaPara}>
          Sub heading goes here Max two lines Lorem ipsum dolor sit amet, elit,{" "}
          <br />
          Sub heading goes here Max two lines Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,{" "}
        </p>

        <div className={styles.ctaButtonHolder}>
          <Button text={"FAQ"} />
          <Button text={"Support"} />
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
