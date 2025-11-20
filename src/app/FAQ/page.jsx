import React from "react";
import styles from "./faq.module.css";
import QAdrop from "../../sections/FAQ/QAdrop/QAdrop";
import CommonCTA from "../../components/CommonCTAsection/CommonCTA";

const page = () => {
  return (
    <div>
      <div className={styles.FlexContainer}>
        <div className={styles.TitleContainer}>
          <h6 className={styles.SectionTitle}>General FAQ</h6>
        </div>
        <div className={styles.QNList}>
          {["1", "1", "1", "1", "1", "1", "1"].map((item, i) => {
            return (
              <QAdrop
                key={i}
                borderBottom={i == 6}
                qn={"This is a answer box busy being read"}
                an={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
              />
            );
          })}
        </div>
      </div>
      <div className={styles.FlexContainer}>
        <div className={styles.TitleContainer}>
          <h6 className={styles.SectionTitle}>General FAQ</h6>
        </div>
        <div className={styles.QNList}>
          {["1", "1", "1", "1", "1", "1", "1"].map((item, i) => {
            return (
              <QAdrop
                key={i}
                borderBottom={i == 6}
                qn={"This is a answer box busy being read"}
                an={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
              />
            );
          })}
        </div>
      </div>
      <div className={styles.FlexContainer}>
        <div className={styles.TitleContainer}>
          <h6 className={styles.SectionTitle}>General FAQ</h6>
        </div>
        <div className={styles.QNList}>
          {["1", "1", "1", "1", "1", "1", "1"].map((item, i) => {
            return (
              <QAdrop
                key={i}
                borderBottom={i == 6}
                qn={"This is a answer box busy being read"}
                an={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
              />
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: "140px" }}>
        <CommonCTA
          heading={"Still Need Help?"}
          paragraph={
            "Sub heading goes here Max two lines Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
          image="/images/need-help.png"
          imageDir="left"
        />
      </div>
    </div>
  );
};

export default page;
