import React from "react";
import styles from "./signuptoday.module.css";
import Button from "../../../components/Buttons/Button";

const SignUpToday = ({
  text = "Sign up today!",
  image = "/images/Fresher Assets-23.jpg",
  showInput = true,
  buttonText = "Sign Up",
}) => {
  return (
    <div
      className={styles.supTodayContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.supTodayContenHolder}>
        <h3 className={styles.supTitle}>{text}</h3>
        {showInput && (
          <input className={styles.supInput} placeholder="Email..." />
        )}
        <div className={styles.supButton}>
          <Button text={buttonText} bg="#C9DEB1" />
        </div>
      </div>
    </div>
  );
};

export default SignUpToday;
