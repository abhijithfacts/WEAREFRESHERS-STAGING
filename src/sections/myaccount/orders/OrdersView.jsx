import React from "react";
import styles from "./orders.module.css";
import Button from "../../../components/Buttons/Button";
import StyledTable from "../../../components/StyledTable/StyledTable";

const customerDetails = [
  { label: "Customer Name:", value: "FRESHER USER 123" },
  { label: "Customer ID:", value: "CC-T1234" },
  { label: "Statement From:", value: "DD-MM-YYYY" },
  { label: "Statement To:", value: "DD-MM-YYYY" },
];

const pendingColumns = [
  { key: "itemNo", label: "Item #" },
  { key: "itemName", label: "Item Name" },
  { key: "deliveryDate", label: "Date of Delivery" },
  { key: "country", label: "Country" },
  { key: "farm", label: "Farm" },
  {
    key: "action",
    label: "Action",
    render: (row) => (
      <Button text={"More Details"} bg={"#C9DEB1"} miniButton={true} />
    ),
  },
];
const ProgressColumns = [
  { key: "orderId", label: "Order ID" },
  { key: "status", label: "Status" },
  {
    key: "trackOrder",
    label: "Track Order",
    render: (row) => (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#ABFA3D",
          }}
        ></div>
        Dispatched
      </div>
    ),
  },
  { key: "totalAmount", label: "Total Amount" },
  { key: "date", label: "Date" },
  {
    key: "action",
    label: "Action",
    render: (row) => (
      <Button text={"More Details"} bg={"#C9DEB1"} miniButton={true} />
    ),
  },
];

const ProgressRows = [
  {
    orderId: 1,
    status: "Confirmed",
    trackOrder: "",
    totalAmount: "AED 300.00",
    date: "12/03/2025",
  },
  {
    orderId: 1,
    status: "Confirmed",
    trackOrder: "",
    totalAmount: "AED 300.00",
    date: "12/03/2025",
  },
  {
    orderId: 1,
    status: "Confirmed",
    trackOrder: "",
    totalAmount: "AED 300.00",
    date: "12/03/2025",
  },
];

const PendingRows = [
  {
    itemNo: 1,
    itemName: "Flower Name",
    deliveryDate: "12/03/2025",
    country: "KEN",
    farm: "Farm Name",
  },
  {
    itemNo: 2,
    itemName: "Flower Name",
    deliveryDate: "12/03/2025",
    country: "AUS",
    farm: "Farm Name",
  },
  {
    itemNo: 3,
    itemName: "Flower Name",
    deliveryDate: "12/03/2025",
    country: "ZA",
    farm: "Farm Name",
  },
];

const Orders = () => {
  return (
    <div className={styles.DetailsSection}>
      <div className={styles.FilterSection}>
        <Button text={"Filter"} bg="#C9DEB1" />
        <Button text={"Download"} bg="#fff" />
      </div>
      <div className={styles.FlexColContainer}>
        {customerDetails.map((item, i) => {
          return (
            <div className={styles.FlexContainer} key={i}>
              <p className={styles.Para}>
                {item.label}{" "}
                <span style={{ marginLeft: "10px" }}>{item.value}</span>{" "}
              </p>
            </div>
          );
        })}
      </div>

      <div className={styles.FlexColContainer}>
        <h6 className={styles.OrderTableHeadings}>Pending Confirmation</h6>
        <StyledTable columns={pendingColumns} data={PendingRows} />
      </div>
      <div className={styles.FlexColContainer}>
        <h6 className={styles.OrderTableHeadings}>Order in Progress</h6>
        <StyledTable columns={ProgressColumns} data={ProgressRows} />
      </div>
      <div className={styles.FlexColContainer}>
        <h6 className={styles.OrderTableHeadings}>Past Orders</h6>
        <StyledTable columns={ProgressColumns} data={ProgressRows} />
      </div>
    </div>
  );
};

export default Orders;
