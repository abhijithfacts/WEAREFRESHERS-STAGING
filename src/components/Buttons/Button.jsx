import React from "react";
import styles from "./buttonStyles.module.css";

const Button = ({ text, bg, miniButton = false }) => {
  return (
    <button
      style={{
        background: bg,
        padding: miniButton && "10px 30px",
        fontSize: miniButton && "14px",
        borderRadius: miniButton && "6px",
      }}
      className={styles.styledButton}
    >
      {text}
    </button>
  );
};

export default Button;
