"use client";
import { useState } from "react";
import styles from "./styledinput.module.css";

const StyledInput = ({
  value = "",
  onChange,
  placeholder = "Enter text...",
  type = "text",
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type={type}
      className={styles.styledInput}
      value={internalValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default StyledInput;
