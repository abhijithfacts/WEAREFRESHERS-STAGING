import React from "react";
import styles from "./farmcard.module.css";
import Button from "../Buttons/Button";
import Image from "next/image";

const FarmCards = ({
  image = "/images/farm-card-1.png",
  title = "Farm name",
  subtitle = "Location",
  paragraph = "High-Altitude Roses from Kenya",
}) => {
  return (
    <div className={styles.cardWrapper}>
      <Image
        className={styles.cardImage}
        src={image}
        alt="farm-card-image"
        width={500}
        height={500}
      ></Image>
      <div className={styles.cardDetailsHolder}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <h6 className={styles.cardSubTitle}>{subtitle}</h6>
        <p className={styles.cardPara}>{paragraph}</p>
        <Button className={styles.cardButton} text={"Explore"} bg="#c9deb1" />
      </div>
    </div>
  );
};

export default FarmCards;
