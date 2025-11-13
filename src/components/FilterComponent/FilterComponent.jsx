import React from "react";
import styles from "./filtercomponent.module.css";
import Link from "next/link";
import DateRangeSelector from "../DatePicker/DatePicker";
import { LiaShippingFastSolid } from "react-icons/lia";
import Image from "next/image";

const FilterComponent = () => {
  return (
    <div className={styles.FilterWrapper}>
      <div className={styles.SearchSection}>
        <h5 className={styles.HeadingStyles}>Search</h5>
        <input className={styles.SearchInput} placeholder="Search" />
      </div>
      <div className={styles.SettingsContainer}>
        <h5 className={styles.HeadingStyles}>Settings</h5>
        <div className={styles.SettingsBox}>
          <div className={styles.DeliveryLocationSelector}>
            <input
              className={styles.LocationSelect}
              placeholder="Delivery Location"
            />
            <p className={styles.ClearSearch}>Clear All</p>
          </div>
          <div className={styles.DeliveryDateSelector}>
            <p className={styles.SubHeading}>Delivery Date</p>
            <DateRangeSelector />
            <DateRangeSelector />
          </div>
          <div className={styles.ConfirmCheckBox}>
            <input type="checkbox" className={styles.CheckBoxElement} />
            <span className={styles.GreyText}>Select Delivery</span>
            <LiaShippingFastSolid size={18} color="#6a6a6a" />
          </div>
        </div>
      </div>
      <div className={styles.IconsContainer}>
        <Image
          src={"/icons/filter-component-icn1.png"}
          alt="filter-icons"
          width={600}
          height={600}
          quality={100}
          className={styles.FilterIcons}
          unoptimized
        />
        <Image
          src={"/icons/filter-component-icn2.png"}
          alt="filter-icons"
          width={600}
          height={600}
          quality={100}
          className={styles.FilterIcons}
          unoptimized
        />
        <Image
          src={"/icons/filter-component-icn3.png"}
          alt="filter-icons"
          width={600}
          height={600}
          quality={100}
          className={styles.FilterIcons}
          unoptimized
        />
      </div>
      <div className={styles.AttributesFilterSection}>
        {["Color", "Position", "Type", "Stem Length"]?.map((attr, i) => {
          return (
            <div className={styles.AttributeItem} key={i}>
              <h5 className={styles.HeadingStyles}>{attr}</h5>
              <div className={styles.AttributeOptions}>
                {[1, 1, 1, 1, 1, 1, 1, 1].map((option, i) => {
                  return (
                    
                      <div key={i} className={styles.AtrOption}>
                        <div className={styles.FlexDiv}>
                          <div className={styles.OptionSelectIndicator}></div>
                          <p className={styles.GreyText}>Pink</p>
                        </div>
                        <p className={styles.GreyText}>1221</p>
                      </div>
                    
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterComponent;
