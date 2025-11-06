import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/desktop_nav_logo.png"
          width={80}
          height={40}
          alt="footer-logo"
          className={styles.footerLogo}
        />

        <FooterSecs />
        <FooterSecs />
        <FooterSecs />
        <FooterSecs />
      </div>
    </div>
  );
};

export default Footer;

// footer sections
const FooterSecs = () => {
  return (
    <div className={styles.footerItems}>
      <h4 className={styles.footerHeadings}>Company</h4>
      <p className={styles.footerParas}>About</p>
      <p className={styles.footerParas}>Overview</p>
      <p className={styles.footerParas}>Categories</p>
      <p className={styles.footerParas}>Special orders</p>
    </div>
  );
};
