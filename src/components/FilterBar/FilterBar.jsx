"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./filterbar.module.css";
import { IoGridSharp } from "react-icons/io5";
import { HiOutlineViewList } from "react-icons/hi";
import Button from "../Buttons/Button";
import StyledSelect from "../StyledSelect/StyledSelect";

const FilterBar = () => {
  return (
    <div className={styles.filterBarWrap}>
      <StyledSelect options={["a", "b", "C", "d", "d"]} />
      <StyledSelect options={["a", "b", "C", "d", "d"]} />
      <StyledSelect options={["a", "b", "C", "d", "d"]} />
      <Button text={"Filter"} bg={"#c9deb1"} />
      <HiOutlineViewList color="#c9deb1" size={44} />
      <IoGridSharp color="#c9deb1" size={30} />
    </div>
  );
};

export default FilterBar;
