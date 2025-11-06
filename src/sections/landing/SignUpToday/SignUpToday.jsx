import React from "react";
import styles from "./signuptoday.module.css";
import Button from "../../../components/Buttons/Button";

const SignUpToday = () => {
  return (
    <div className={styles.supTodayContainer}>
      <div className={styles.supTodayContenHolder}>
        <h3 className={styles.supTitle}>Sign up today!</h3>
        <input className={styles.supInput} placeholder="Email..." />
        <div className={styles.supButton}>
          <Button text={"Sign Up"} bg="#C9DEB1" />
        </div>
      </div>
    </div>
  );
};

export default SignUpToday;
