import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import WorldMap from "../../components/WorldMap/WorldMap";
import CommonCTA from "../../components/CommonCTAsection/CommonCTA";
import FindFarms from "../../sections/overview/findFarms/FindFarms";
import StickyMenu from "../../components/StickyMenu/StickyMenu";

const Overview = () => {
  return (
    <div>
      <StickyMenu />
      <CommonHeroBanner
        image="/images/overview-hero.jpg"
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
      <CommonCTA
        image="/images/find-farms-cta.png"
        imageDir="left"
        heading={"Need Help?"}
        paragraph={
          "Sub heading goes here Max two linesLorem ipsum dolor sit amet, consectetur adipiscing elit, "
        }
      />
    </div>
  );
};

export default Overview;
