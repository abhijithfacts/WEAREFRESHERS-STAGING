import React from "react";
import styles from "./sidemenu.module.css";
import Image from "next/image";

const Sidemenu = () => {
  return (
    <div className={styles.MenuContainer}>
      {["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"].map((item, i) => {
        return (
          <div
            className={i == 0 ? styles.MenuItemActive : styles.MenuItems}
            key={i}
          >
            <Image
              className={styles.MenuItemIcon}
              src="/icons/lock.png"
              alt="menu-icon"
              width={600}
              height={600}
              quality={100}
            />
            <p className={styles.MenuItemText}>Overview</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidemenu;
