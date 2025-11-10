import React from "react";
import styles from "./commonDesc.module.css";
import Image from "next/image";
import Button from "../Buttons/Button";

const CommonDesc = ({
  TitleTop = "",
  TitleSL = "",
  pararaph = "",
  sectionName = "",
  image = "",
}) => {
  return (
    <div className={styles.CDSContainer}>
      <div>
        <div>
          <div className={styles.CDStitleWrap}>
            <div className={styles.titleContainer}>
              <h5 className={styles.CDSTitleTop}>{TitleTop}</h5>
              <h5 className={styles.CDSTitleBottom}>{TitleSL}</h5>
            </div>
            <div className={styles.titleContainerMobile}>
              <h5 className={styles.CDSTitleTop}>{TitleTop + " " + TitleSL}</h5>
            </div>
            <div className={styles.CDSGreenLineContainer}>
              <h6 className={styles.greenLineText}>{sectionName}</h6>
              <div className={styles.CDSGreenLine}></div>
            </div>
          </div>
          <div>
            <p className={styles.CDSParagraph}>{pararaph} </p>
            <div className={styles.buttonHolder}>
              <Button text={"Learn more"} bg={"#c9deb1"} />
              <Button text={"Learn more"} bg={"#c9deb1"} />
            </div>
          </div>
        </div>
      </div>
      <Image
        className={styles.CDSimage}
        src={image}
        alt="common-sec-image"
        width={600}
        height={600}
      />
    </div>
  );
};

export default CommonDesc;
