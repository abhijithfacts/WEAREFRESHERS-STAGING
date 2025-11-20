import React from "react";
import styles from "./tandc.module.css";
import CardSection from "../../sections/privacy-policy/CardSec/CardSection";
import { data } from "./data";

const TermsAndConditions = () => {
  return (
    <div className={styles.Wrapper}>
      <h5 className={styles.MainHeading}>Terms & Conditions</h5>

      <p className={styles.Para}>
        Welcome to the DomusFlowers.com website (the "Site"). These terms and
        conditions ("Terms and Conditions") apply to the Site, DomusFlowers.com
        and all of its divisions, subsidiaries, and affiliate operated Internet
        sites which reference these Terms and Conditions. By accessing the Site,
        you confirm your understanding of the Terms and Conditions. If you do
        not agree to these Terms and Conditions of use, you shall not use this
        website. The Site reserves the right, to change, modify, add, or remove
        portions of these Terms and Conditions of use at any time. Changes will
        be effective when posted on the Site with no other notice provided.
        Please check these Terms and Conditions of use regularly for updates.
        Your continued use of the Site following the posting of changes to these
        Terms and Conditions of use constitutes your acceptance of those
        changes.
      </p>
      <div>
        {data.map((item, i) => {
          return <CardSection title={item.title} para={item.para} key={i} />;
        })}
      </div>
    </div>
  );
};

export default TermsAndConditions;
