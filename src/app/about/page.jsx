"use client";
import React from "react";
import CommonHeroBanner from "../../components/CommonHeroBanner/CommonHeroBanner";
import CommonCTA from "../../components/CommonCTAsection/CommonCTA";
import AboutDesc from "../../sections/about/DescSection/AboutDesc";
import WhyChooseUs from "../../sections/about/whyChooseUs/WhyChooseUs";
import OurStory from "../../sections/about/ourStorySection/OurStory";
import StickyMenu from "../../components/StickyMenu/StickyMenu";
import SignUpToday from "../../sections/landing/SignUpToday/SignUpToday";
import { useMediaQuery } from "@mui/material";

const AboutPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <StickyMenu />
      <CommonHeroBanner
        image="/images/1.jpg"
        text="Bringing Farm-Fresh Flowers to Your Business
"
      />
      <AboutDesc
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
      <WhyChooseUs />
      {isTablet ? (
        <CommonCTA
          imageDir="right"
          heading={"Common CTA"}
          image="/images/about-cta-2.png"
          paragraph={
            "Sub heading goes here Max two lines Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
        />
      ) : (
        <CommonCTA
          imageDir="left"
          heading={"Common CTA"}
          image="/images/about-cta-2.png"
          paragraph={
            "Sub heading goes here Max two lines Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
        />
      )}

      <OurStory />
      <SignUpToday image="/images/sign-up2.jpg" />
    </>
  );
};

export default AboutPage;
