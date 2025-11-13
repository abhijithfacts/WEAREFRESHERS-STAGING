import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import HorizontalScrollables from "../../sections/categories/HorizontalScrollables/HorizontalScrollables";
import styles from "./categoriespage.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import SignUpToday from "../../sections/landing/SignUpToday/SignUpToday";
import StickyMenu from "../../components/StickyMenu/StickyMenu";

const Categories = () => {
  return (
    <>
      <StickyMenu />
      <div className={styles.CategoriesPage}>
        <CommonHeroBanner
          image="/images/categories-hero.jpg"
          text="Shop by Category"
          showButtons={false}
        />
        <HorizontalScrollables />
        <div className={styles.ProductsList}>
          <FilterComponent />
          <ProductsList />
        </div>
        <SignUpToday
          image="/images/category-signup.jpg"
          showInput={false}
          text="View Our Seasonal Offers"
          buttonText="View Offers"
        />
      </div>
    </>
  );
};

export default Categories;
