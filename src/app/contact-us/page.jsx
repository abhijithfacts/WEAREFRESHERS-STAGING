import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import StickyMenu from "../../components/StickyMenu/StickyMenu";
import ContactInfoCards from "../../sections/contact/cards/ContactInfoCards";
import styles from "./contact.module.css";
import Contactform from "../../sections/contact/form/Contactform";
import NewsLetter from "../../sections/contact/newsletter/NewsLetter";

const ContactUs = () => {
  return (
    <div>
      <StickyMenu />
      <CommonHeroBanner
        image="/images/sign-up2.jpg"
        text="Let’s Get in Touch"
      />
      <div className={styles.ContactInfoCards}>
        <ContactInfoCards
          icheight={"60px"}
          icwidth={"45px"}
          icon={"/icons/phone.png"}
          title={"+971 4 286 4846"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
        <ContactInfoCards
          icheight={"50px"}
          icwidth={"65px"}
          icon={"/icons/email.png"}
          title={"email@fresher.com"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
        <ContactInfoCards
          icheight={"60px"}
          icwidth={"55px"}
          icon={"/icons/location.png"}
          title={"Dubai"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
      </div>
      <div className={styles.FormSection}>
        <Contactform />
        <NewsLetter />
      </div>

      <div className={styles.GreenStrip}></div>
    </div>
  );
};

export default ContactUs;
