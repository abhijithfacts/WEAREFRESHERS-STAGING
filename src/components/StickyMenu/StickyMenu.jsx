import React from "react";
import styles from "./stickymenu.module.css";
import Image from "next/image";

const StickyMenu = () => {
  return (
    <div className={styles.menuWrapper}>
      <Image className={styles.icon} alt="icon-search" width={20} height={20} src="/icons/search.png" />
      <Image className={styles.icon} alt="icon-user" width={20} height={20} src="/icons/user.png" />
      <Image className={styles.icon} alt="icon-cart" width={20} height={20} src="/icons/cart.png" />
    </div>
  );
};

export default StickyMenu;
