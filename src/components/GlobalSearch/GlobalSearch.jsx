import React from "react";
import styles from "./GlobalSearch.module.css";
import Image from "next/image";
import ProductCard from "../ProductCard/ProductCard";

const GlobalSearch = () => {
  return (
    <div className={styles.SearchWrapper}>
      <div className={styles.InputWrap}>
        <input placeholder="Search..." autoFocus className={styles.SearchInput} />
        <Image
          className={styles.SearchIcon}
          width={600}
          height={600}
          src="/icons/search.png"
          alt="search-icon"
        />
      </div>
      {/* <div className={styles.SearchResult}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div> */}
    </div>
  );
};

export default GlobalSearch;
