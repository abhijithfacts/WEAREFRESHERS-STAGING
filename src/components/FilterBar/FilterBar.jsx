"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./filterbar.module.css";
import { IoGridSharp } from "react-icons/io5";
import { HiOutlineViewList } from "react-icons/hi";
import Button from "../Buttons/Button";

const FilterBar = () => {
  return (
    <div className={styles.filterBarWrap}>
      <FilterSelect options={["a", "b", "C", "d", "d"]} />
      <FilterSelect options={["a", "b", "C", "d", "d"]} />
      <FilterSelect options={["a", "b", "C", "d", "d"]} />
      <Button text={"Filter"} bg={"#c9deb1"} />
      <HiOutlineViewList color="#c9deb1" size={44} />
      <IoGridSharp color="#c9deb1" size={30} />
    </div>
  );
};

export default FilterBar;

const FilterSelect = ({ options = [] }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);

  const filtered = options.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        type="button"
        className={styles.dropdownbtn}
        onClick={() => setOpen(!open)}
      >
        <span>{selected || "Options"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`icon ${open ? "rotate" : ""}`}
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="#9ccc65"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className={styles.dropdownMenu}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.dropdownSearch}
          />
          <ul className={styles.dropdownList}>
            {filtered.length ? (
              filtered.map((option, i) => (
                <li
                  key={i}
                  className={styles.dropdownItem}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                    setSearch("");
                  }}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className={styles.dropdownEmpty}>No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
