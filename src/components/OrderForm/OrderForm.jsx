"use client";
import React from "react";
import StyledSelect from "../StyledSelect/StyledSelect";
import StyledInput from "../StyledInput/StyledInput";
import styles from "./orderform.module.css";
import DateRangeSelector from "../DatePicker/DatePicker";
import DatePicker from "react-datepicker";

const OrderForm = () => {
  return (
    <div className={styles.FormWrapper}>
      <h5 className={styles.ItemNumberHeading}>Order Details - Item One</h5>
      <div>
        <div className={styles.GridItems}>
          {[
            { field: "Select Delivery Date *", type: "date" },
            { field: "Select Country *", type: "select" },
            { field: "Select Farm", type: "select" },
            { field: "Variety", type: "select" },
            { field: "Colour Shade", type: "select" },
            { field: "Requested Quantity *", type: "input" },
          ]?.map((item, i) => {
            return (
              <div className={styles.SelectContainer} key={i}>
                <span className={styles.FieldLabel}>{item.field}</span>
                {item?.type == "input" ? (
                  <StyledInput />
                ) : item?.type == "date" ? (
                  <DateRangeSelector />
                ) : (
                  <StyledSelect />
                )}
              </div>
            );
          })}
        </div>
        <h5 className={styles.ItemNumberHeading}>Additional Notes</h5>
      </div>
    </div>
  );
};

export default OrderForm;
