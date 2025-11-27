"use client";
import React, { useEffect } from "react";
import StickyMenu from "../components/StickyMenu/StickyMenu";
import HeroBanner from "../sections/landing/HeroBanner/HeroBanner";
import About from "../sections/landing/AboutSection/About";
import CTAsection from "../sections/landing/CTAsection/CTAsection";
import LookingFresher from "../sections/landing/LookingFresher/LookingFresher";
import SignUpToday from "../sections/landing/SignUpToday/SignUpToday";
import FresherVoice from "../sections/landing/FresherVoice/FresherVoice";
import NeedHelp from "../sections/landing/NeedHelp/NeedHelp";

const page = () => {
  return (
    <div className="page-wrap">
      <StickyMenu />
      <HeroBanner />
      <About />
      <CTAsection />
      <LookingFresher />
      <SignUpToday />
      <FresherVoice />
      <NeedHelp />
    </div>
  );
};

export default page;




