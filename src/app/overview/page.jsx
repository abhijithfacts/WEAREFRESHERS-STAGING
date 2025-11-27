"use client";

import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import WorldMap from "../../components/WorldMap/WorldMap";
import CommonCTA from "../../components/CommonCTAsection/CommonCTA";
import FindFarms from "../../sections/overview/findFarms/FindFarms";
import StickyMenu from "../../components/StickyMenu/StickyMenu";
import { useMediaQuery } from "@mui/material";

const Overview = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px ) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div>
      <StickyMenu />
      <CommonHeroBanner
        image="/images/overview-hero.webp"
        text="Bringing Farm-Fresh Flowers to Your Business"
      />
      <WorldMap />
      <CommonCTA
        heading={"CTA heading"}
        paragraph={
          "Sub heading goes here Max two lines Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        }
        image="/images/overview-cta.png"
      />
      <FindFarms />
      {isTablet ? (
        <CommonCTA
          image="/images/find-farms-cta.webp"
          imageDir="right"
          heading={"Need Help?"}
          paragraph={
            "Sub heading goes here Max two linesLorem ipsum dolor sit amet, consectetur adipiscing elit, "
          }
        />
      ) : (
        <CommonCTA
          image="/images/find-farms-cta.webp"
          imageDir="left"
          heading={"Need Help?"}
          paragraph={
            "Sub heading goes here Max two linesLorem ipsum dolor sit amet, consectetur adipiscing elit, "
          }
        />
      )}
    </div>
  );
};

export default Overview;
