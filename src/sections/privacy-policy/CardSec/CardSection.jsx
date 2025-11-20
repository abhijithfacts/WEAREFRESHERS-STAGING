import React from "react";
import styles from "./cardsection.module.css";

const CardSection = ({ title, para }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.HeadingWrap}>
        <h5 className={styles.SecHeading}>{title}</h5>
      </div>
      <div>
        <p className={styles.Para}>{para}</p>
      </div>
    </div>
  );
};

export default CardSection;
