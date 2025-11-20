import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import FarmCards from "../../components/FarmCards/FarmCards";
import styles from "./countrySpecific.module.css";
import SignUpToday from "../../sections/landing/SignUpToday/SignUpToday";
import HorizontalScrollables from "../../sections/categories/HorizontalScrollables/HorizontalScrollables";

const CountrySpecific = () => {
  return (
    <div className={styles.Wrapper}>
      <CommonHeroBanner image="/images/contact-hero.jpg" text="South Africa" />
      <div className={styles.CommonPadding}>
        <p className={styles.Para}>
          [Country Name] is known for its exceptional [flowers/varieties],
          partnering with top farms to ensure fresh, high-quality blooms.
        </p>
      </div>
      <h5 className={styles.SectionTitle}>Find Farms</h5>
      <div className={styles.CardsContainer}>
        <FarmCards />
        <FarmCards />
        <FarmCards />
        <FarmCards />
        <FarmCards />
        <FarmCards />
      </div>
      <h5 className={styles.SectionTitle}>Varieties</h5>
      <div className={styles.FlexColContainer}>
        <HorizontalScrollables removePadding={true} ShowTitle={false} />
        <HorizontalScrollables removePadding={true} ShowTitle={false} />
        <HorizontalScrollables removePadding={true} ShowTitle={false} />
        <HorizontalScrollables removePadding={true} ShowTitle={false} />
      </div>

      <SignUpToday
        image="/images/category-signup.jpg"
        showInput={false}
        text="View Our Seasonal Offers"
        buttonText="View Offers"
      />
    </div>
  );
};

export default CountrySpecific;
