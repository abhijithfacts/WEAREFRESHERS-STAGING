import React from "react";
import styles from "./commonCTA.module.css";
import Button from "../Buttons/Button";
import Image from "next/image";

const CommonCTA = ({
  heading,
  paragraph,
  image = "/images/cta-image.png",
  imageDir = "right",
}) => {
  return (
    <div
      className={styles.commonCTAcontainer}
      style={{ flexDirection: imageDir == "left" ? "row-reverse" : "row" }}
    >
      <div className={styles.commonCtaLeftSection}>
        <h4 className={styles.commonCtaHeading}>{heading}</h4>
        <p className={styles.commonCtaPara}>{paragraph} </p>
        <div className={styles.commonCtaButtonHolder}>
          <Button text={"View more"} />
        </div>
      </div>
      <div className={styles.commonCtaRightSection}>
        {imageDir == "right" && (
          <Image
            src={image}
            alt="CTA-image"
            className={styles.commonCtaImage}
            width={500}
            height={500}
            style={{
              width: "300px",
              height: "auto",
              position: "absolute",
              right: "40px",
              bottom: 0,
            }}
          />
        )}
        {imageDir == "left" && (
          <Image
            src={image}
            alt="CTA-image"
            className={styles.commonCtaImage}
            width={500}
            height={500}
            style={{
              width: "400",
              height: "auto",
              position: "absolute",
              left: "0",
              bottom: 0,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CommonCTA;
