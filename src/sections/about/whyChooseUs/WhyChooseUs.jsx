import React from "react";
import styles from "./whychooseus.module.css";
import Button from "../../../components/Buttons/Button";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.mobileHeading}>
        <h4 className={styles.sectionTitle}>Why Choose Us?</h4>
      </div>
      <div className={styles.firstSection}>
        <h4 className={styles.sectionTitle}>Why Choose Us?</h4>
        <div className={styles.sectionTitleSL}>
          <div className={styles.verticalLine}></div>
          <h4 className={styles.sectionTitle}></h4>
        </div>
        <div className={styles.secondSection}>
          <Image
            className={styles.plantImage}
            src="/images/why-choose-us.png"
            alt="plant-image"
            width={600}
            height={600}
          />
        </div>
      </div>

      <div className={styles.thirdSection}>
        <Row
          title={"Direct Farm Sourcing"}
          paragraph={
            "We partner directly with trusted flower farms to deliver unparalleled freshness and authenticity."
          }
          icon={"/icons/wcu-1.png"}
        />
        <Row
          title={"Quality Assurance & Freshness"}
          paragraph={
            "Our strict quality checks ensure every petal meets our high standards, promising blooms that last longer."
          }
          icon={"/icons/wcu-2.png"}
        />
        <Row
          title={"Variety & Customizability"}
          paragraph={
            "Choose from a diverse range of flowers, tailored to your needs—perfect for any occasion or brand aesthetic."
          }
          icon={"/icons/wcu-3.png"}
        />
        <Row
          title={"Competitive Pricing"}
          paragraph={
            "Enjoy premium products at prices that make sense for your business, thanks to our streamlined supply chain."
          }
          icon={"/icons/wcu-4.png"}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;

// mapping rows

const Row = ({ title, paragraph, icon }) => {
  return (
    <div className={styles.rowWrap}>
      <div className={styles.rowTop}>
        <div className={styles.textHolder}>
          <h6 className={styles.rowHeading}>{title}</h6>
          <p className={styles.rowParagraph}>{paragraph}</p>
        </div>
        <div className={styles.iconWrap}>
          <Image
            className={styles.icon}
            src={icon}
            alt="icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className={styles.rowBottom}>
        <Button text={"Learn more"} bg={"#c9deb1"} />
      </div>
      <div className={styles.greenLineHorizontal}></div>
    </div>
  );
};
