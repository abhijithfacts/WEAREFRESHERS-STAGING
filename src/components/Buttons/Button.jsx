import React from "react";
import styles from "./buttonStyles.module.css";
import CircularProgress from "@mui/material/CircularProgress";

const Button = ({
  text,
  bg,
  miniButton = false,
  nano = false,
  loading = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
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
      {loading ? <CircularProgress color="#000" size={18} /> : text}
    </button>
  );
};

export default Button;
