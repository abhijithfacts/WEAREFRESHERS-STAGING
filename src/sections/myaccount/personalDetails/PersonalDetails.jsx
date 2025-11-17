import React from "react";
import styles from "./personaldetails.module.css";
import Button from "../../../components/Buttons/Button";

const FormLabels = [
  { label: "First Name", Mode: "new" },
  { label: "Last Name", Mode: "new" },
  { label: "Email", Mode: "new" },
  { label: "Contact Number", Mode: "new" },
  { label: "Date of Birth", Mode: "new" },
  { label: "Company Name", Mode: "new" },
  { label: "City", Mode: "new" },
  { label: "Country", Mode: "new" },
];

const PersonalDetails = () => {
  return (
    <div className={styles.SectionWrapper}>
      <div className={styles.DetailsSection}>
        <h5 className={styles.CustomerCode}>Customer Code: CC-T1234</h5>
        <div className={styles.UserAvatar}>AVATAR</div>
        <div className={styles.FlexInputWrap}>
          {FormLabels.map((item, i) => {
            return (
              <div className={styles.InputContainer} key={i}>
                <label className={styles.InputLabel}>{item.label}</label>
                <input
                  className={styles.InputEl}
                  type="text"
                  placeholder="John"
                />
              </div>
            );
          })}
        </div>

        <div className={styles.ButtonWrapper}>
          <Button text={"Save"} bg={"#C9DEB1"} />
          <Button text={"Cancel"} bg={"#fff"} />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
