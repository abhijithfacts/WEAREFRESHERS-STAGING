import React from "react";
import styles from "./productCard.module.css";
import Image from "next/image";
import Button from "../Buttons/Button";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.CardTopSection}>
        <h6 className={styles.ProductName}>Product Name</h6>
        <h6 className={styles.FarmName}>Farm Name</h6>
      </div>
      <div className={styles.ImageSection}>
        <Image
          src={"/images/product-card-image.png"}
          alt="product-image"
          width={1000}
          height={1000}
          quality={100}
          className={styles.ProductImage}
        />
      </div>
      <div className={styles.AttributesSection}>
        <div className={styles.AttributeItem}>
          <Image
            className={styles.AttributeIcon}
            src={"/icons/diameter.png"}
            width={300}
            height={300}
            quality={100}
            alt="attribute-icon"
            unoptimized
          />
          <p className={styles.AttributeText}>30x50cm</p>
        </div>
      </div>
      <div className={styles.FarmDetailsSection}>
        <div className={styles.FarmDetails}>
          <Image
            className={styles.FarmCountryFlag}
            src={"/country/1.png"}
            width={300}
            height={300}
            quality={100}
            alt="attribute-icon"
            unoptimized
          />
          <p className={styles.GrowerName}>ZA - Grower /Farm Name</p>
        </div>
      </div>
      <div className={styles.PriceQtySection}>
        <p className={styles.PQvalues}>
          Minimum Order Qty: <span className={styles.BoldValues}>5 Boxes</span>
        </p>
        <p className={styles.PQvalues}>
          Price per Stem/Box:<span className={styles.BoldValues}>AED15.00</span>{" "}
        </p>
      </div>
      <div className={styles.AddRemoveButtonsSection}>
        <Button miniButton={true} text={"-"} bg={"#C9DEB1"} />
        <Button miniButton={true} text={"10"} bg={"#f5f6f8"} />
        <Button miniButton={true} text={"+"} bg={"#C9DEB1"} />
      </div>
      <div className={styles.CartButtonSection}>
        <Button miniButton={true} text={"Add to Cart"} bg={"#C9DEB1"} />

        <Link href="/details" className={styles.ProductCardDetailsLink}>
          Details
        </Link>
        <FaRegBookmark size={22} color="#bfbfbf" className={styles.SaveProductIcon}/>
      </div>
    </div>
  );
};

export default ProductCard;
