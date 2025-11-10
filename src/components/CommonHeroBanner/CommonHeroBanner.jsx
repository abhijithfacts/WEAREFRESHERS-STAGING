import React from "react";
import styles from "./commonHero.module.css";
import Image from "next/image";
import Button from "../Buttons/Button";

const CommonHeroBanner = () => {
  return (
    <div className={styles.commonHeroContainer}>
      <Image
        className={styles.heroImage}
        src={"/images/1.jpg"}
        alt="hero-image"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
      />
      <div className={styles.heroContent}>
        <div className={styles.heroTextContainer}>
          <h5 className={styles.heroText}>
            Bringing Farm-Fresh Flowers to Your Business
          </h5>
        </div>
        <div className={styles.heroButtons}>
          <Button text={"Explore farms"} />
          <Button text={"Order"} />
        </div>
      </div>
    </div>
  );
};

export default CommonHeroBanner;
