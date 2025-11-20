import React from "react";
import styles from "./privacypolicy.module.css";
import CardSection from "../../sections/privacy-policy/CardSec/CardSection";
import { data } from "./data";

const Privacypolicy = () => {
  return (
    <div className={styles.Wrapper}>
      <h5 className={styles.MainHeading}>Privacy Policy</h5>

      <p className={styles.Para}>
        In regard to your privacy, if you have any concerns about your data, you
        are entitled to request access to the personal information that we may
        possess or handle concerning you. You have the right to request us to
        rectify any inaccuracies in your data without incurring any charges.
        Furthermore, you are also empowered to ask us, at any point, to cease
        using your personal data for direct marketing endeavors. Should you wish
        to get in touch with us, you may do so by sending an email
        to domusflowers.com.
      </p>
      <p className={styles.Para}>
        Consent By providing us or our representative with your data or by using
        the Site, you are giving your consent for us to utilize your data as
        described in this Privacy Policy, specifically for the purpose of
        verifying your identity.
      </p>
      <div>
        {data.map((item, i) => {
          return <CardSection title={item.title} para={item.para} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Privacypolicy;
