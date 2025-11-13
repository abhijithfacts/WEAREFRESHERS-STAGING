import React from "react";
import styles from "./horizontalscrollables.module.css";
import Image from "next/image";

const HorizontalScrollables = () => {
  return (
    <div className={styles.HSCcontainer}>
      <div className={styles.HSCsecionTitleContainer}>
        <h5 className={styles.HSCheading}>Browse by Variety</h5>
        <div className={styles.GreenLine}></div>
      </div>
      {/* <div className={styles.ScrollButton}>
        <Image
          src="/icons/Arrow-left.png"
          alt="arrow-left"
          width={1000}
          height={1000}
          quality={100}
          className={styles.ArrowIcons}
        />
        <Image
          src="/icons/Arrow-right.png"
          alt="arrow-right"
          width={1000}
          height={1000}
          quality={100}
          className={styles.ArrowIcons}
        />
      </div> */}
      <div className={styles.ScrollItems}>
        {[1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => {
          return (
            <div className={styles.ItemContainer} key={i}>
              <div className={styles.Item}>
                <Image
                  src="/images/scroll-image.png"
                  alt={"category-image"}
                  width={1000}
                  height={1000}
                  quality={100}
                  className={styles.ItemImage}
                />
              </div>
              <h6 className={styles.ItemName}>Alstroemeria</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalScrollables;
