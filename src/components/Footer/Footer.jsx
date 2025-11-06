import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Image
        src="/images/footer-logo.png"
        width={80}
        height={40}
        alt="footer-logo"
        className={styles.footerLogo}
      />
      <div className={styles.footerItemsContainer}>
        <FooterSecs
          data={{
            heading: "Company",
            data: ["About", "Overview", "Categories", "Special Orders"],
          }}
        />
        <FooterSecs
          data={{ heading: "Useful links", data: ["FAQ", "Account"] }}
        />
        <FooterSecs
          data={{
            heading: "Help",
            data: ["Privacy Policy", "Ordering Process", "Terms & Conditions"],
          }}
        />
        <FooterSecs
          data={{
            heading: "Get in Touch",
            data: ["+99 123 4567", "info@fresher.com"],
          }}
        />
      </div>
    </div>
  );
};

export default Footer;

const FooterSecs = ({ data }) => {
  return (
    <div className={styles.footerItems}>
      <h4 className={styles.footerHeadings}>{data?.heading}</h4>
      {data?.data?.map((item, i) => (
        <p key={i} className={styles.footerParas}>
          {item}
        </p>
      ))}
    </div>
  );
};
