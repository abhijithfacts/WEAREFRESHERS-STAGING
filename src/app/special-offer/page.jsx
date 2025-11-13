import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import StyledHeading from "../../components/StyledSectionHeading/StyledHeading";
import styles from "./specialofferpage.module.css";
import OrderForm from "../../components/OrderForm/OrderForm";
import StickyMenu from "../../components/StickyMenu/StickyMenu";

const page = () => {
  return (
    <div>
      <StickyMenu />
      <CommonHeroBanner
        image="/images/special-offer-hero.jpg"
        text="Special Orders"
      />
      <div className={styles.PlaceOrderSection}>
        <StyledHeading
          title={"Place your Special Order Today!"}
          paragraph={
            "For Special Occasions or Events that are beyond the available delivery dates, fill out the form and we will get back to you."
          }
        />
        <OrderForm />
      </div>
    </div>
  );
};

export default page;
