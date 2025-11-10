import React from "react";
import styles from "./ourStory.module.css";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textSection}>
        <h5 className={styles.heading}>Our Story</h5>
        <div className={styles.paragraphSection}>
          <div className={styles.paragraph}>
            Share a brief narrative of how Fresher started, highlighting your
            passion for flowers and the inspiration behind creating a direct
            sourcing solution. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </div>
      </div>
      <Image
        className={styles.image}
        src={"/images/our-story.png"}
        alt="our-story"
        width={800}
        height={500}
      />
    </div>
  );
};

export default OurStory;
