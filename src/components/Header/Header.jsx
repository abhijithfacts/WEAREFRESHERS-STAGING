"use client";
import React, {useEffect, useState } from "react";
import styles from "./headerStyles.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);
  return (
    <>
      <MobileMenu
        showMobileMenu={showMobileMenu}
        closeMenu={() => setShowMobileMenu(false)}
      />
      <div className={styles.headerContainer}>
        <div className={styles.headerTopSection}>
          <div
            className={styles.burgerMenu}
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
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
            <Link href={"/overview"} className={styles.linkUnstyled}>
              <h5 className={styles.navItem}>Overview</h5>
            </Link>
            <Link href={"/categories"} className={styles.linkUnstyled}>
              <h5 className={styles.navItem}>Categories</h5>
            </Link>
            <Link href={"/special-offer"} className={styles.linkUnstyled}>
              <h5 className={styles.navItem}>Special Offer</h5>
            </Link>
            <Link href={"/contact-us"} className={styles.linkUnstyled}>
              <h5 className={styles.navItem}>Contact Us</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
