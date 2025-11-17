import React from "react";
import styles from "./newsletter.module.css";
import Button from "../../../components/Buttons/Button";

const NewsLetter = () => {
  return (
    <div className={styles.SectionWrapper}>
      <h4 className={styles.SectionTitle}>OUR NEWSLETTER</h4>
      <p className={styles.SectionPara}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <input className={styles.InputEl} type="email" placeholder="Email" />
      <Button className={styles.SubmitButton} text={"Sign Up"} bg={"#C9DEB1"} />
    </div>
  );
};

export default NewsLetter;
