import React from "react";
import styles from "./contactform.module.css";
import Button from "../../../components/Buttons/Button";

const Contactform = () => {
  return (
    <div className={styles.FormWrap}>
      <div className={styles.FlexContainer}>
        <input className={styles.InputEl} type="text" placeholder="Name" />
        <input className={styles.InputEl} type="text" placeholder="Last Name" />
      </div>
      <div className={styles.FlexContainer}>
        <input className={styles.InputEl} type="email" placeholder="Email" />
      </div>
      <div className={styles.FlexContainer}>
        <textarea className={styles.TextArea} placeholder="Message" />
      </div>
      <div className={styles.ButtonContainer}>
        <Button text={"Submit"} bg={"#C9DEB1"} />
      </div>
    </div>
  );
};

export default Contactform;
