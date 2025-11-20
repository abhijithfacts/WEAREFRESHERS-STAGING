import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import FarmCards from "../../components/FarmCards/FarmCards";
import styles from "./farms.module.css";
import SignUpToday from "../../sections/landing/SignUpToday/SignUpToday";
import CustomCalendar from "../../components/CustomCalendar/CustomCalendar";
import StyledSelect from "../../components/StyledSelect/StyledSelect";
import StyledInput from "../../components/StyledInput/StyledInput";
import Button from "../../components/Buttons/Button";

const Farms = () => {
  return (
    <div className={styles.Wrapper}>
      <CommonHeroBanner
        image="/images/farms-hero.jpg"
        text="Discover Our Farms"
      />
      <div className={styles.CommonPadding}>
        <p className={styles.Para}>
          Partnering with leading farms specializing in [flower type/region].
          Find the best match based on availability, variety, and price.
        </p>

        <div className={styles.FlexContainer}>
          <StyledSelect />
          <CustomCalendar />
          <StyledSelect />
          <StyledSelect />
          <StyledSelect />
          <StyledSelect />
          <Button text={"Seacrh"} bg={"#C9DEB1"} />
        </div>
      </div>
      <div className={styles.CardsContainer}>
        <FarmCards />
        <FarmCards />
        <FarmCards />
        <FarmCards />
        <FarmCards />
        <FarmCards />
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

export default Farms;
