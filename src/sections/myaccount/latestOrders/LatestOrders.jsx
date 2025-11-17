import React from "react";
import styles from "./latestorders.module.css";
import Button from "../../../components/Buttons/Button";

const LatestOrders = () => {
  return (
    <div className={styles.SectionWrapper}>
      <h4 className={styles.SectionHeading}>Your Latest Orders</h4>
      <div className={styles.SectionElse}>
        <h4 className={styles.SectionHeading}>No Recent Orders</h4>
        <p className={styles.SectionPara}>
          You haven’t placed any orders lately
        </p>
        <Button text={"View All Orders"} bg={"#C9DEB1"} />
      </div>
    </div>
  );
};

export default LatestOrders;
