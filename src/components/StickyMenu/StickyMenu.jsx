"use client";
import React from "react";
import styles from "./stickymenu.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const StickyMenu = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleProfileClick = () => {
    if (!session || status === "unauthenticated") {
      router.push("/auth/login");
    } else {
      router.push("/my-account");
    }
  };

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
  );
};

export default StickyMenu;
