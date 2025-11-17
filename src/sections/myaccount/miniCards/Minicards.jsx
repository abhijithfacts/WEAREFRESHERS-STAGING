import React from "react";
import Button from "../../../components/Buttons/Button";
import styles from "./minicards.module.css";

const Minicards = ({ ButtonText = "", title = "", para = "" }) => {
  return (
    <div className={styles.SectionWrapper}>
      <h4 className={styles.SectionHeading}>{title}</h4>
      <p className={styles.SectionPara}>{para}</p>
      <Button text={ButtonText} bg={"#C9DEB1"} />
    </div>
  );
};

export default Minicards;
