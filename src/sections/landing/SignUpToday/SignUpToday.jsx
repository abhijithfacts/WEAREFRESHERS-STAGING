import React from "react";
import styles from "./signuptoday.module.css";
import Button from "../../../components/Buttons/Button";

const SignUpToday = ({ image = "/images/Fresher Assets-23.jpg" }) => {
  return (
    <div
      className={styles.supTodayContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
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
