import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import ProductsList from "../../components/ProductsList/ProductsList";
import styles from "./compare.module.css";

const Compare = () => {
  return (
    <div>
      <CommonHeroBanner
        image="/images/about-det.png"
        text="Where to Find [Flower Name]"
        showButtons={false}
      />
      <div className={styles.FlexContainer}>
        <h5 className={styles.SectionHeading}>
          [Flower Name] Available at Selected Farms{" "}
        </h5>
      </div>
      <div className={styles.FlexContainer}>
        <ProductsList dtp={4} />
      </div>
    </div>
  );
};

export default Compare;
