"use client";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "./customStyles.css";

const CustomCalendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format="DD MMM"
        slotProps={{
          /** ---------------------------
           * FIXED INPUT BORDER STYLING
           ----------------------------*/
          field: {
            sx: {
              // padding: "5px 16px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "2px solid #C9DEB1 !important",
              outline: "none !important",
              color: "#C9DEB1",

              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                border: "1px solid #C9DEB1",
                paddingRight: "8px",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#C9DEB1 !important",
                borderRadius: "10px",
                border: "1px solid #C9DEB1",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#A8C98E !important",
                borderRadius: "10px",
                border: "1px solid #C9DEB1",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#C9DEB1 !important",
                borderRadius: "10px",
                border: "1px solid #C9DEB1",
              },

              "& input": {
                color: "#C9DEB1",
                fontSize: "16px",
                fontWeight: 500,
                outline: "none !important",
                // padding: "12px 14px",
              },

              "& .MuiSvgIcon-root": {
                color: "#C9DEB1",
                fontSize: "22px",
              },
              "& .MuiOutlinedInput-root": {
                outline: "none !important",
              },

              "& .MuiOutlinedInput-root.Mui-focused": {
                outline: "none !important",
                boxShadow: "none !important",
              },
            },
          },

          textField: {
            sx: {
              border: "1px solid #C9DEB1",
              background: "#fff",
              borderRadius: "5px",
              outline: "none",
              padding: "0px",
            },
          },

          /** Calendar popup + days (works fine) */
          desktopPaper: {
            sx: {
              borderRadius: "16px",
              // padding: "10px 10px 20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            },
          },
          calendar: {
            sx: {
              "& .MuiPickersCalendarHeader-label": {
                fontSize: "18px",
                fontWeight: 500,
              },
              "& .MuiPickersArrowSwitcher-root .MuiIconButton-root": {
                color: "#111",
              },
              "& .MuiDayCalendar-weekDayLabel": {
                color: "#333",
                fontWeight: 600,
              },
              "& .MuiDayCalendar-header": {
                borderBottom: "1px solid #ddd",
                marginBottom: "10px",
              },
            },
          },
          day: {
            sx: {
              fontSize: "14px",
              borderRadius: "50% !important",
              width: "36px",
              height: "36px",
              "&.MuiPickersDay-today": {
                border: "1px solid #C9DEB1",
              },
              "&.Mui-selected": {
                backgroundColor: "#C9DEB1 !important",
                color: "#111 !important",
              },
              "&.Mui-disabled": {
                color: "#c5c5c5 !important",
              },
              "&:hover": {
                backgroundColor: "#E6F2D9",
              },
            },
          },
          actionBar: { sx: { display: "none" } },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomCalendar;
