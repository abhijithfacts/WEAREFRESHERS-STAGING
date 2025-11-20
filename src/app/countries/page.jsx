import React from "react";
import styles from "./countries.module.css";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import WorldMap from "../../components/WorldMap/WorldMap";
import SignUpToday from "../../sections/landing/SignUpToday/SignUpToday";


const Countries = () => {
  return (
    <div className={styles.CountriesSectionWrap}>
      <CommonHeroBanner
        image="/images/countries-hero.jpg"
        text="Explore Our Global Flower Network"
      />
      <div className={styles.ParaWrap}>
        <p className={styles.Para}>
          Explore the finest farms and discover an array of exquisite flower
          varieties from around the globe. Begin your journey by selecting a
          country, where you'll gain access to a curated list of top-rated
          farms, an extensive selection of flower species, and competitive
          pricing tailored to your needs. Whether you're sourcing for personal
          enjoyment, events, or business purposes, find the perfect blooms and
          trusted growers with just a few clicks.
        </p>

        <WorldMap mapOnly={true} />
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

export default Countries;
