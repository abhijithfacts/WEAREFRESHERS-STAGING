import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import FarmCards from "../../components/FarmCards/FarmCards";
import styles from "./farms.module.css";

const Farms = () => {
  return (
    <div className={styles.Wrapper}>
      <CommonHeroBanner
        image="/images/farms-hero.jpg"
        text="Discover Our Farms"
      />

      <div className={styles.CardsContainer}>
        <FarmCards />
        <FarmCards />
        <FarmCards />
        <FarmCards />
        <FarmCards />
        <FarmCards />
      </div>
    </div>
  );
};

export default Farms;
