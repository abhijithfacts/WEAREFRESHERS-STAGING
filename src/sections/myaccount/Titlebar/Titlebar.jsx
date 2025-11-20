import React from "react";
import styles from "./titlebar.module.css";
import Image from "next/image";

const Titlebar = ({ title = "User Name" }) => {
  return (
    <div className={styles.SectionWrap}>
      <Image
        src={"/icons/user.png"}
        width={600}
        height={600}
        alt="user-icon"
        className={styles.UserIcon}
        quality={100}
        unoptimized
      />
      <h3 className={styles.UserName}>{title}</h3>
    </div>
  );
};

export default Titlebar;
