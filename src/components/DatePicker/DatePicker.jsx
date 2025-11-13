"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateRangeSelector.module.css";

const DateRangeSelector = ({ single = true }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className={styles.datePickerWrapper}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Mon 16-12"
        dateFormat="EEE dd-MM"
        className={styles.dateInput}
      />
      {!single && (
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date"
          dateFormat="EEE dd-MM"
          className={styles.dateInput}
        />
      )}
    </div>
  );
};

export default DateRangeSelector;
