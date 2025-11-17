import React from "react";
import styles from "./contactinfo.module.css";
import Image from "next/image";

const ContactInfoCards = ({ icon, icwidth, icheight, title, para }) => {
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.CardIconContainer}>
        <Image
          className={styles.CardIcon}
          src={icon}
          alt="contact-info-icon"
          width={500}
          height={500}
          style={{
            width: icwidth,
            height: icheight,
          }}
        />
      </div>
      <div className={styles.CardDetailsSection}>
        <h4 className={styles.CardTitle}>{title}</h4>
        <p className={styles.Cardpara}>{para} </p>
      </div>
    </div>
  );
};

export default ContactInfoCards;
