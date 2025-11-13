import React from "react";
import styles from "./styledheading.module.css";

const StyledHeading = ({ title, paragraph }) => {
  return (
    <div>
      <div className={styles.secionTitleContainer}>
        <h5 className={styles.secionTitle}>{title}</h5>
        <div className={styles.greenLine}></div>
      </div>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

export default StyledHeading;
