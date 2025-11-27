"use client";
import React, { useState } from "react";
import styles from "./stickymenu.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import GlobalSearch from "../GlobalSearch/GlobalSearch";

const StickyMenu = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleProfileClick = () => {
    if (!session || status === "unauthenticated") {
      router.push("/auth/login");
    } else {
      router.push("/my-account");
    }
  };

  const handleSearchClick = async () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      {showSearch && <GlobalSearch />}
      <div className={styles.menuWrapper}>
        <div onClick={handleSearchClick}>
          <Image
            className={styles.icon}
            alt="icon-search"
            width={20}
            height={20}
            src="/icons/search.png"
          />
        </div>

        <div onClick={handleProfileClick}>
          <Image
            className={styles.icon}
            alt="icon-user"
            width={20}
            height={20}
            src="/icons/user.png"
          />
        </div>
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
    </>
  );
};

export default StickyMenu;
