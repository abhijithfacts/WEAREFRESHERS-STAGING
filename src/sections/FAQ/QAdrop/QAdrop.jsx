"use client";
import React, { useState } from "react";
import styles from "./qadrop.module.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const QAdrop = ({ qn, an, borderBottom = false }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={styles.QAwrap}
      style={{
        borderBottom: borderBottom && "2px solid #6A6A6A",
      }}
    >
      <div className={styles.Toggler}>
        {expanded ? (
          <FaMinus
            className={styles.ToggleIcon}
            onClick={() => setExpanded(false)}
          />
        ) : (
          <FaPlus
            className={styles.ToggleIcon}
            onClick={() => setExpanded(true)}
          />
        )}
        <h6 className={styles.Qn}>{qn}</h6>
      </div>
      {expanded && <p className={styles.An}>{an}</p>}
    </div>
  );
};

export default QAdrop;
