import React from "react";
import styles from "./accstatement.module.css";
import Button from "../../../components/Buttons/Button";
import CustomerStatementTable from "./AccTable/AccTable";

const customerDetails = [
  { label: "Customer Name:", value: "FRESHER USER 123" },
  { label: "Customer ID:", value: "CC-T1234" },
  { label: "Statement From:", value: "DD-MM-YYYY" },
  { label: "Statement To:", value: "DD-MM-YYYY" },
  { label: "", value: "" },
  { label: "Credit Limit:", value: "AED 20,000.00" },
  { label: "Balance:", value: "AED 1,000.00" },
  { label: "Payment Terms:", value: "Bi-Auunual" },
  { label: "Account:", value: "Verified" },
];

const rows = [
  {
    date: "20-01-2025",
    transaction: "Lorum Ipsum",
    narration: "Opening Balance as on–Mar 19 2025 12:00am",
    debit: "AED 300.00",
    credit: "AED 300.00",
    balance: "0.00CR",
  },
  {
    date: "20-01-2025",
    transaction: "Lorum Ipsum",
    narration: "Opening Balance as on–Mar 19 2025 12:00am",
    debit: "AED 300.00",
    credit: "AED 300.00",
    balance: "0.00CR",
  },
  {
    date: "20-01-2025",
    transaction: "Lorum Ipsum",
    narration: "Opening Balance as on–Mar 19 2025 12:00am",
    debit: "AED 300.00",
    credit: "AED 300.00",
    balance: "0.00CR",
  },
  {
    date: "20-01-2025",
    transaction: "Lorum Ipsum",
    narration: "Opening Balance as on–Mar 19 2025 12:00am",
    debit: "AED 300.00",
    credit: "AED 300.00",
    balance: "0.00CR",
  },
  {
    date: "20-01-2025",
    transaction: "Lorum Ipsum",
    narration: "Opening Balance as on–Mar 19 2025 12:00am",
    debit: "AED 300.00",
    credit: "AED 300.00",
    balance: "0.00CR",
  },
];

const AccStatementView = () => {
  return (
    <div className={styles.DetailsSection}>
      <div className={styles.FilterSection}>
        <Button text={"Filter"} bg="#C9DEB1" />
        <Button text={"Download"} bg="#fff" />
      </div>

      {customerDetails.map((item, i) => {
        return (
          <div className={styles.FlexContainer} key={i}>
            <p className={styles.AccPara}>{item.label} </p>
            <p className={styles.AccPara}>{item.value} </p>
          </div>
        );
      })}

      <CustomerStatementTable data={rows} />
    </div>
  );
};

export default AccStatementView;
