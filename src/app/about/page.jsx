import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import CommonCTA from "../../components/CommonCTAsection/CommonCTA";
import CommonDesc from "../../components/CommonDescSection/CommonDesc";

const AboutPage = () => {
  return (
    <>
      <CommonHeroBanner />
      <CommonDesc
        sectionName="About us"
        TitleTop="Our Mission"
        image="/images/about-det.png"
        TitleSL="Freshness at Your Fingertips"
        pararaph="At Fresher, we believe every bouquet starts with a story of quality, freshness, and sustainability. That’s why we bridge the gap between flower farms and businesses, ensuring you receive the finest blooms, straight from the source."
      />
      <CommonCTA
        heading={"Common CTA"}
        image="/images/about-cta.png"
        paragraph={
          "Sub heading goes here Max two lines Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
      />
    </>
  );
};

export default AboutPage;
