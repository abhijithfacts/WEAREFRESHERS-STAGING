import React from "react";
import styles from "./headerStyles.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTopSection}>
        <div className={styles.burgerMenu}>
          <Image
            className={styles.burgerImage}
            alt="nav-burger"
            src="/icons/burger.png"
            width={40}
            height={40}
            quality={100}
          />
        </div>
        <Link href={"/"} className={styles.linkUnstyled}>
          <Image
            className={styles.headerLogo}
            alt="header-logo"
            width={200}
            height={100}
            src="/images/desktop_nav_logo.png"
            quality={100}
          />
        </Link>
        <h5 className={styles.userGreet}>Welcome FRESHER USER 123</h5>
        <div className={styles.mobileAvatar}>
          <Image
            className={styles.userIcon}
            alt="user-icon"
            width={40}
            height={40}
            src="/icons/user.png"
            quality={100}
          />
        </div>
      </div>
      <div className={styles.headerNavSection}>
        <div className={styles.headerNavItems}>
          <Link href={"/about"} className={styles.linkUnstyled}>
            <h5 className={styles.navItem}>About</h5>
          </Link>
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
