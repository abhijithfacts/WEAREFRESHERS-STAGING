"use client";

import React, { useState } from "react";
import styles from "./myaccount.module.css";
import Titlebar from "../../sections/myaccount/Titlebar/Titlebar";
import Sidemenu from "../../sections/myaccount/sidemenu/Sidemenu";
import LatestOrders from "../../sections/myaccount/latestOrders/LatestOrders";
import Minicards from "../../sections/myaccount/miniCards/Minicards";
import PersonalDetails from "../../sections/myaccount/personalDetails/PersonalDetails";
import PasswordManagement from "../../sections/myaccount/passwordManagement/PasswordManagement";
import AccStatementView from "../../sections/myaccount/accountStatement/AccStatementView";
import Orders from "../../sections/myaccount/orders/OrdersView";

const MyAccount = () => {
  const [menuActive, setMenuActive] = useState("Overview");
  return (
    <div className={styles.SectionWrapper}>
      <Titlebar />
      <div className={styles.FlexWrapper}>
        <Sidemenu menuActive={menuActive} getActiveMenu={setMenuActive} />
        <div className={styles.DetailsSection}>
          {menuActive == "Personal details" && (
            <>
              <h5 className={styles.WelcomeHeading}>Personal Details</h5>
              <PersonalDetails />
            </>
          )}

          {menuActive == "Overview" && (
            <>
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
            </>
          )}

          {menuActive == "Change Password" && (
            <>
              <h5 className={styles.WelcomeHeading}>Create New Password</h5>
              <PasswordManagement />
            </>
          )}

          {menuActive == "Account Statement" && (
            <>
              <h5 className={styles.WelcomeHeading}>Account Statement</h5>
              <AccStatementView />
            </>
          )}
          {menuActive == "Orders" && (
            <>
              <h5 className={styles.WelcomeHeading}>Orders</h5>
              <Orders />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
