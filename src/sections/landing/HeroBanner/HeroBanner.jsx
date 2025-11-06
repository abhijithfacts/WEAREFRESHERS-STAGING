"use client";
import React from "react";
import styles from "./heroBanner.module.css";
import Button from "../../../components/Buttons/Button";

const HeroBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroBackground}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroText}>
            Connecting flower shops and
            <br /> web shops with premium blooms, <br /> straight from the farm.
          </h2>
          <div className={styles.heroButtonContainer}>
            <Button text="Explore Farms" />
            <Button text="Order" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
