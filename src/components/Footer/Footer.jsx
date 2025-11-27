"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

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
            data: [
              { text: "About", link: "/about" },
              { text: "Overview", link: "/overview" },
              { text: "Categories", link: "/categories" },
              { text: "Special Orders", link: "/special-offer" },
            ],
          }}
        />
        <FooterSecs
          data={{
            heading: "Useful links",
            data: [
              { text: "FAQ", link: "/FAQ" },
              { text: "Account", link: "/my-account" },
            ],
          }}
        />
        <FooterSecs
          data={{
            heading: "Help",
            data: [
              { text: "Privacy Policy", link: "/privacy-policy" },
              { text: "Ordering Process", link: "/ordering-process" },
              { text: "Terms & Conditions", link: "/terms" },
            ],
          }}
        />
        <FooterSecs
          data={{
            heading: "Get in Touch",
            data: [
              { text: "+99 123 4567", link: "tel:+991234567" },
              { text: "info@fresher.com", link: "mailto:info@fresher.com" },
            ],
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
        <Link
          href={item.link}
          key={i}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <p className={styles.footerParas}>{item.text}</p>
        </Link>
      ))}
    </div>
  );
};
