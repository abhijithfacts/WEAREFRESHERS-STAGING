"use client";
import Image from "next/image";
import { MapPin } from "lucide-react";
import styles from "./WorldMap.module.css";
import Button from "../Buttons/Button";

export default function WorldMap() {
  const locations = [
    { country: "USA", top: "33%", left: "25%" },
    { country: "Mexico", top: "47%", left: "22%" },
    { country: "Brazil", top: "65%", left: "31%" },
    { country: "UK", top: "28%", left: "46%" },
    { country: "France", top: "32%", left: "47%" },
    { country: "Germany", top: "30%", left: "49%" },
    { country: "Spain", top: "36%", left: "45%" },
    { country: "Italy", top: "38%", left: "49%" },
    { country: "Sweden", top: "20%", left: "50%" },
    { country: "Egypt", top: "46%", left: "52%" },
    { country: "South Africa", top: "74%", left: "51%" },
    { country: "Russia (West)", top: "25%", left: "57%" },
    { country: "Russia (East)", top: "25%", left: "80%" },
    { country: "India", top: "51%", left: "66.5%" },
    { country: "China", top: "42%", left: "72%" },
    { country: "Japan", top: "38%", left: "84%" },
    { country: "Indonesia", top: "64%", left: "77%" },
    { country: "Australia (East)", top: "72%", left: "86%" },
  ];

  return (
    <div className={styles.mapWrapper}>
      <div className={styles.secionTitleContainer}>
        <h5 className={styles.secionTitle}>Start Your Journey by Country</h5>
        <div className={styles.greenLine}></div>
      </div>
      <p className={styles.paragraph}>
        Choose a country to explore farms and flower varieties, or compare
        prices and availability.
      </p>
      <div className={styles.mapContainer}>
        <Image
          src="/images/worldmap.png"
          alt="World Map"
          fill
          style={{ objectFit: "contain" }}
          priority
        />

        {locations.map((loc, idx) => (
          <button
            key={idx}
            className={styles.pin}
            style={{ top: loc.top, left: loc.left }}
            onClick={() => alert(`You clicked ${loc.country}`)}
            title={loc.country}
          >
            <MapPin size={20} />
          </button>
        ))}
      </div>

      <div className={styles.buttonHolder}>
        <Button text={"View Countries"} bg={"#c9deb1"} />
      </div>
    </div>
  );
}
