import React from "react";
import styles from "./buttonStyles.module.css";

const Button = ({ text, bg }) => {
  return (
    <button
      style={{
        background: bg,
      }}
      className={styles.styledButton}
    >
      {text}
    </button>
  );
};

export default Button;
