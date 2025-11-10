import React from "react";
import styles from "./findfarms.module.css";
import FarmCards from "../../../components/FarmCards/FarmCards";
import Button from "../../../components/Buttons/Button";

const FindFarms = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.secionTitleContainer}>
        <h5 className={styles.secionTitle}>Find the Best Farms</h5>
        <div className={styles.greenLine}></div>
      </div>
      <p className={styles.paragraph}>
        We partner with farms specializing in premium flowers such as roses,
        peonies, and more.
        <br /> Use our filters to find farms by country, variety, color, and
        availability.
      </p>

      <div className={styles.cardContainer}>
        <FarmCards image="/images/farm-card-1.png" />
        <FarmCards image="/images/farm-card-2.png" />
        <FarmCards image="/images/farm-card-3.png" />
      </div>
      <div className={styles.buttonHolder}>
        <Button text={"Explore farms"} bg={"#c9deb1"} />
      </div>
    </div>
  );
};

export default FindFarms;
