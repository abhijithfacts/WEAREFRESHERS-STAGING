import React from "react";
import styles from "./headerStyles.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTopSection}>
        <Image
          className={styles.headerLogo}
          alt="header-logo"
          width={80}
          height={40}
          src="/images/desktop_nav_logo.png"
        />
        <h5 className={styles.userGreet}>Welcome FRESHER USER 123</h5>
      </div>
      <div className={styles.headerNavSection}>
        <div className={styles.headerNavItems}>
          <h5 className={styles.navItem}>About</h5>
          <h5 className={styles.navItem}>Overview</h5>
          <h5 className={styles.navItem}>Categories</h5>
          <h5 className={styles.navItem}>Special Orders</h5>
          <h5 className={styles.navItem}>Contact Us</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
