import React from "react";
import styles from "./AboutDesc.module.css";
import Image from "next/image";
import Button from "../../../components/Buttons/Button";

const AboutDesc = ({
  TitleTop = "",
  TitleSL = "",
  pararaph = "",
  sectionName = "",
  image = "",
}) => {
  return (
    <div className={styles.ADSContainer}>
      <div>
        <div>
          <div className={styles.ADStitleWrap}>
            <div className={styles.titleContainer}>
              <h5 className={styles.ADSTitleTop}>{TitleTop}</h5>
              <h5 className={styles.ADSTitleBottom}>{TitleSL}</h5>
            </div>
            <div className={styles.titleContainerMobile}>
              <h5 className={styles.ADSTitleTop}>{TitleTop + " " + TitleSL}</h5>
            </div>
            <div className={styles.ADSGreenLineContainer}>
              <h6 className={styles.greenLineText}>{sectionName}</h6>
              <div className={styles.ADSGreenLine}></div>
            </div>
          </div>
          <div>
            <p className={styles.ADSParagraph}>{pararaph} </p>
            <div className={styles.buttonHolder}>
              <Button text={"Learn more"} bg={"#c9deb1"} />
              <Button text={"Learn more"} bg={"#c9deb1"} />
            </div>
          </div>
        </div>
      </div>
      <Image
        className={styles.ADSimage}
        src={image}
        alt="common-sec-image"
        width={600}
        height={600}
      />
    </div>
  );
};

export default AboutDesc;
