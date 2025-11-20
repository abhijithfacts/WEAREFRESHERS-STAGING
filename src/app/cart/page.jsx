"use client";
import React, { useState } from "react";
import Titlebar from "../../sections/myaccount/Titlebar/Titlebar";
import styles from "./cart.module.css";
import StyledTable from "../../components/StyledTable/StyledTable";
import Button from "../../components/Buttons/Button";

const columns = [
  { key: "product", label: "Product" },
  { key: "orderDate", label: "Order Date" },
  { key: "deliveryDate", label: "Delivery Date" },
  { key: "deliveryLocation", label: "Delivery Location" },
  { key: "supplier", label: "Supplier" },
  { key: "country", label: "Country" },
  { key: "quantity", label: "Quantity" },
  { key: "pricePerItem", label: "Price p/item" },
  { key: "totalPrice", label: "Total Price" },
  {
    key: "cutOff",
    label: "Cut-Off",
    render: () => {
      return (
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#C9DEB1",
                color: "#000",
                padding: "5px",
                borderRadius: "3px",
                fontSize: "12px",
              }}
            >
              14
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#666",
                marginTop: "2px",
              }}
            >
              Days
            </div>
          </div>
          :
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#C9DEB1",
                color: "#000",
                padding: "5px",
                borderRadius: "3px",
                fontSize: "12px",
              }}
            >
              12
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#666",
                marginTop: "2px",
              }}
            >
              Hrs
            </div>
          </div>
          :
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#C9DEB1",
                color: "#000",
                padding: "5px",
                borderRadius: "3px",
                fontSize: "12px",
              }}
            >
              01
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#666",
                marginTop: "2px",
              }}
            >
              Min
            </div>
          </div>
        </div>
      );
    },
  },
];

const data = [
  {
    product: "Acacia H Clair Lune",
    orderDate: "21-03-2025",
    deliveryDate: "21-04-2025",
    deliveryLocation: "Cape Town",
    supplier: "Supplier",
    country: "South Africa",
    quantity: "30",
    pricePerItem: "AED 24.00",
    totalPrice: "AED 500.00",
    cutOff: "04:10:19",
  },
  {
    product: "Acacia H Clair Lune",
    orderDate: "21-03-2025",
    deliveryDate: "21-04-2025",
    deliveryLocation: "Cape Town",
    supplier: "Supplier",
    country: "South Africa",
    quantity: "30",
    pricePerItem: "AED 24.00",
    totalPrice: "AED 500.00",
    cutOff: "04:10:19",
  },
  {
    product: "Acacia H Clair Lune",
    orderDate: "21-03-2025",
    deliveryDate: "21-04-2025",
    deliveryLocation: "Cape Town",
    supplier: "Supplier",
    country: "South Africa",
    quantity: "30",
    pricePerItem: "AED 24.00",
    totalPrice: "AED 500.00",
    cutOff: "04:10:19",
  },
  {
    product: "Acacia H Clair Lune",
    orderDate: "21-03-2025",
    deliveryDate: "21-04-2025",
    deliveryLocation: "Cape Town",
    supplier: "Supplier",
    country: "South Africa",
    quantity: "30",
    pricePerItem: "AED 24.00",
    totalPrice: "AED 500.00",
    cutOff: "04:10:19",
  },
  {
    product: "Acacia H Clair Lune",
    orderDate: "21-03-2025",
    deliveryDate: "21-04-2025",
    deliveryLocation: "Cape Town",
    supplier: "Supplier",
    country: "South Africa",
    quantity: "30",
    pricePerItem: "AED 24.00",
    totalPrice: "AED 500.00",
    cutOff: "04:10:19",
  },
  {
    product: "Acacia H Clair Lune",
    orderDate: "21-03-2025",
    deliveryDate: "21-04-2025",
    deliveryLocation: "Cape Town",
    supplier: "Supplier",
    country: "South Africa",
    quantity: "30",
    pricePerItem: "AED 24.00",
    totalPrice: "AED 500.00",
    cutOff: "04:10:19",
  },
  {
    product: "Acacia H Clair Lune",
    orderDate: "21-03-2025",
    deliveryDate: "21-04-2025",
    deliveryLocation: "Cape Town",
    supplier: "Supplier",
    country: "South Africa",
    quantity: "30",
    pricePerItem: "AED 24.00",
    totalPrice: "AED 500.00",
    cutOff: "04:10:19",
  },
  {
    product: "Acacia H Clair Lune",
    orderDate: "21-03-2025",
    deliveryDate: "21-04-2025",
    deliveryLocation: "Cape Town",
    supplier: "Supplier",
    country: "South Africa",
    quantity: "30",
    pricePerItem: "AED 24.00",
    totalPrice: "AED 500.00",
    cutOff: "04:10:19",
  },
  {
    product: "Acacia H Clair Lune",
    orderDate: "21-03-2025",
    deliveryDate: "21-04-2025",
    deliveryLocation: "Cape Town",
    supplier: "Supplier",
    country: "South Africa",
    quantity: "30",
    pricePerItem: "AED 24.00",
    totalPrice: "AED 500.00",
    cutOff: "04:10:19",
  },
  {
    product: "Acacia H Clair Lune",
    orderDate: "21-03-2025",
    deliveryDate: "21-04-2025",
    deliveryLocation: "Cape Town",
    supplier: "Supplier",
    country: "South Africa",
    quantity: "30",
    pricePerItem: "AED 24.00",
    totalPrice: "AED 500.00",
    cutOff: "04:10:19",
  },
];

const cartDetails = [
  { label: "Subtotal:", value: "AED 75.00" },
  { label: "Delivery Charge: ", value: "AED 0.00" },
  { label: "Discount:", value: "AED 0.00" },
  { label: "VAT (5%): ", value: "AED 0.00" },
  { label: "Total: ", value: "AED 0.00" },
];

const Cart = () => {
  return (
    <div className={styles.SectionWrapper}>
      <Titlebar title="Nihad" />
      <div className={styles.DetailsSection}>
        <h5 className={styles.SectionHeading}>Your Cart</h5>
        <div className={styles.TableWrapper}>
          <StyledTable columns={columns} data={data} />
        </div>
        <div>
          {cartDetails.map((item, i) => {
            return (
              <div className={styles.FlexContainer} key={i}>
                <p className={styles.Summary}>{item.label} </p>
                <p className={styles.Summary}>{item.value} </p>
              </div>
            );
          })}
        </div>

        <div className={styles.ButtonsHolder}>
          <Button text={"Place Order"} bg={"#C9DEB1"} />
          <Button text={"Cancel"} />
        </div>
      </div>
      <div className={styles.GreenStrip}></div>
    </div>
  );
};

export default Cart;
