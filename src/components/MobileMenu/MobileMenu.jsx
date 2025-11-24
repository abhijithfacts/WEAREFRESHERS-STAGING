import React from "react";
import styles from "./Mobilemenu.module.css";
import Image from "next/image";
import Link from "next/link";


const MobileMenu = ({ showMobileMenu, closeMenu }) => {
  return (
    <div className={showMobileMenu ? styles.MenuBackdrop : ""}>
      <div
        className={`${styles.MenuWrap} ${
          showMobileMenu ? styles.MenuOpen : ""
        }`}
      >
        <div className={styles.MenuClose} onClick={closeMenu}>
          <Image
            className={styles.CloseIcon}
            src="/icons/close.png"
            alt="cart-icon"
            width={600}
            height={600}
          />
        </div>
        <div className={styles.GreetSection}>
          <h6 className={styles.WelcomeText}>Welcome FRESHER USER 123</h6>
        </div>
        <div className={styles.CartSection}>
          <Image
            className={styles.Icons}
            src="/icons/cart.png"
            alt="cart-icon"
            width={600}
            height={600}
          />
          <Image
            className={styles.Icons}
            src="/icons/user.png"
            alt="cart-icon"
            width={600}
            height={600}
          />
        </div>
        <div className={styles.NavSection}>
          <Link className={styles.NavItems} href="/about">
            About
          </Link>
          <Link className={styles.NavItems} href="/overview">
            Overview
          </Link>
          <Link className={styles.NavItems} href="/categories">
            Categories
          </Link>
          <Link className={styles.NavItems} href="/special-offer">
            Special Orders
          </Link>
          <Link className={styles.NavItems} href="/contact-us">
            Contact Us
          </Link>
        </div>
        <div className={styles.SearchSection}>
          <input className={styles.NavSearch} placeholder="Search" />
          <Image
            className={styles.Icons}
            src="/icons/search.png"
            alt="cart-icon"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
