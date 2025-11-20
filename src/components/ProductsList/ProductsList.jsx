import React from "react";
import styles from "./productslist.module.css";
import ProductCard from "../ProductCard/ProductCard";
import FilterBar from "../FilterBar/FilterBar";
import Button from "../Buttons/Button";

const ProductsList = ({ dtp = 3 }) => {
  return (
    <div>
      <FilterBar />
      <div
        className={styles.ProductsContainer}
        style={{ gridTemplateColumns: `repeat(${dtp},1fr)` }}
      >
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className={styles.ButtonContainer}>
        <div className={styles.FlexCol}>
          <p className={styles.ItemsText}>Showing X–Y of Z results</p>
          <Button text={"Load More"} bg={"#C9DEB1"} />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
