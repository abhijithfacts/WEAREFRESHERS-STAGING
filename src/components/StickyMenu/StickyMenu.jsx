import React from "react";
import styles from "./stickymenu.module.css";
import Image from "next/image";
import Link from "next/link";

const StickyMenu = () => {
  return (
    <div className={styles.menuWrapper}>
      <Link href={"/search"}>
        <Image
          className={styles.icon}
          alt="icon-search"
          width={20}
          height={20}
          src="/icons/search.png"
        />
      </Link>

      <Link href={"/my-account"}>
        <Image
          className={styles.icon}
          alt="icon-user"
          width={20}
          height={20}
          src="/icons/user.png"
        />
      </Link>
      <Link href={"/cart"}>
        <Image
          className={styles.icon}
          alt="icon-cart"
          width={20}
          height={20}
          src="/icons/cart.png"
        />
      </Link>
    </div>
  );
};

export default StickyMenu;
