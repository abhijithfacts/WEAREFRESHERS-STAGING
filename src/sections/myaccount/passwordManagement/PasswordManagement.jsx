import React from "react";
import styles from "./passwordmanagement.module.css";
import Button from "../../../components/Buttons/Button";

const PasswordManagement = () => {
  return (
    <div className={styles.DetailsSection}>
      <h5 className={styles.CustomerCode}>Hello, John Doe!</h5>
      <p className={styles.PasswordPara}>
        Your new password must be different from any of your previous passwords.{" "}
      </p>
      <div className={styles.FlexInputWrap}>
        <div className={styles.InputContainer}>
          <label className={styles.InputLabel}>New Password</label>
          <input
            className={styles.InputEl}
            type="text"
            placeholder="Enter Passoword"
          />
        </div>
        <div className={styles.InputContainer}>
          <label className={styles.InputLabel}>Confirm Password</label>
          <input
            className={styles.InputEl}
            type="text"
            placeholder="Re-enter Password"
          />
        </div>
      </div>

      <ul className={styles.UOlist}>
        <li>Your Password needs to be at least 10 characters long </li>
        <li>Must include one symbol </li>
        <li>Must include one number </li>
      </ul>

      <div className={styles.ButtonWrapper}>
        <Button text={"Reset Password"} bg={"#C9DEB1"} />
        <Button text={"Cancel"} bg={"#fff"} />
      </div>
    </div>
  );
};

export default PasswordManagement;
