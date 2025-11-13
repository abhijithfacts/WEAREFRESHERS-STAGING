import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import HorizontalScrollables from "../../sections/categories/HorizontalScrollables/HorizontalScrollables";
import FilterBar from "../../components/FilterBar/FilterBar";
import styles from "./categoriespage.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";
import FilterComponent from "../../components/FilterComponent/FilterComponent";


const Categories = () => {
  return (
    <div className={styles.CategoriesPage}>
      <CommonHeroBanner
        image="/images/categories-hero.jpg"
        text="Shop by Category"
        showButtons={false}
      />
      <HorizontalScrollables />
      <FilterBar />
      <div className={styles.ProductsList}>
      <FilterComponent/>
      <ProductsList />
      </div>
    </div>
  );
};

export default Categories;
