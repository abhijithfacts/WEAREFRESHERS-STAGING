import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Header from "../components/Header/Header";
import About from "../components/AboutSection/About";
import CTAsection from "../components/CTAsection/CTAsection";
import LookingFresher from "../components/LookingFresher/LookingFresher";
import SignUpToday from "../components/SignUpToday/SignUpToday";

const page = () => {
  return (
    <div className="page-wrap">
      <Header />
      <HeroBanner />
      <About />
      <CTAsection />
      <LookingFresher />
      <SignUpToday />
    </div>
  );
};

export default page;
