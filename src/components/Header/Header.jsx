import React from "react";
import styles from "./headerStyles.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTopSection}>
        <div className={styles.burgerMenu}>
          <Image
            className={styles.burgerImage}
            alt="nav-burger"
            src="/icons/burger.png"
            width={25}
            height={20}
            quality={100}
          />
        </div>
        <Image
          className={styles.headerLogo}
          alt="header-logo"
          width={80}
          height={40}
          src="/images/desktop_nav_logo.png"
          quality={100}
        />
        <h5 className={styles.userGreet}>Welcome FRESHER USER 123</h5>
        <div className={styles.mobileAvatar}>
          <Image
            className={styles.userIcon}
            alt="user-icon"
            width={34}
            height={25}
            src="/icons/user.png"
            quality={100}
          />
        </div>
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
