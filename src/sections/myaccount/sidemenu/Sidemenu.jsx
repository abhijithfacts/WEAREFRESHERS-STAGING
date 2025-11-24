"use client";
import React from "react";
import styles from "./sidemenu.module.css";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react"; // Ho
import { useRouter } from "next/navigation";

const MenuItems = [
  { icon: "/icons/user.png", width: "20px", height: "20px", menu: "Overview" },
  {
    icon: "/icons/user.png",
    width: "20px",
    height: "20px",
    menu: "Personal details",
  },
  {
    icon: "/icons/lock.png",
    width: "20px",
    height: "20px",
    menu: "Change Password",
  },
  {
    icon: "/icons/card.png",
    width: "20px",
    height: "20px",
    menu: "Account Statement",
  },
  { icon: "/icons/orders.png", width: "20px", height: "20px", menu: "Orders" },
  { icon: "/icons/logout.png", width: "20px", height: "20px", menu: "Logout" },
];

const Sidemenu = ({ getActiveMenu, menuActive }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = (item) => {
    if (item === "Logout" && status === "authenticated") {
      signOut();
      router.push("/auth/login");
    }
  };

  return (
    <div className={styles.MenuContainer}>
      {MenuItems.map((item, i) => {
        return (
          <div
            className={
              item.menu == menuActive ? styles.MenuItemActive : styles.MenuItems
            }
            key={i}
            onClick={() => {
              getActiveMenu(item.menu);
              handleLogout(item.menu);
            }}
          >
            <Image
              className={styles.MenuItemIcon}
              style={{
                width: item.width,
                height: item.height,
              }}
              src={item.icon}
              alt="menu-icon"
              width={600}
              height={600}
              quality={100}
            />
            <p className={styles.MenuItemText}>{item.menu}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidemenu;
