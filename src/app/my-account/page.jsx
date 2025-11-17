import React from "react";
import styles from "./myaccount.module.css";
import Titlebar from "../../sections/myaccount/Titlebar/Titlebar";
import Sidemenu from "../../sections/myaccount/sidemenu/Sidemenu";
import LatestOrders from "../../sections/myaccount/latestOrders/LatestOrders";
import Minicards from "../../sections/myaccount/miniCards/Minicards";

const MyAccount = () => {
  return (
    <div className={styles.SectionWrapper}>
      <Titlebar />
      <div className={styles.FlexWrapper}>
        <Sidemenu />
        <div className={styles.DetailsSection}>
          <h5 className={styles.WelcomeHeading}>Welcome Back</h5>
          <LatestOrders />
          <div className={styles.MiniCardsSection}>
            <Minicards
              title="Statements"
              ButtonText="Download"
              para="Download your account statements here"
            />
            <Minicards
              title="Account"
              ButtonText="Account Details"
              para="View and edit your account email, contact details and personal information"
            />
            <Minicards
              title="Address"
              ButtonText="Request Update"
              para="51 Streetname, 
                    Road 123,
                    Town name,
                    City "
            />
            <Minicards
              title="Password"
              ButtonText="Update Password"
              para="Update your Password here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
