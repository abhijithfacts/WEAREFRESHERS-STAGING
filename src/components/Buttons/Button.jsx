import React from "react";
import styles from "./buttonStyles.module.css";

const Button = ({ text, bg, miniButton = false, nano = false }) => {
  return (
    <button
      style={{
        background: bg,
        padding: miniButton && "10px 30px",
        padding: nano && "10px",
        fontSize: miniButton && "14px",
        fontSize: nano && "10px",
        borderRadius: miniButton && "6px",
      }}
      className={styles.styledButton}
    >
      {text}
    </button>
  );
};

export default Button;
