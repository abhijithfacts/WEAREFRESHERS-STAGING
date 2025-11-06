import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Header from "../components/Header/Header";
import About from "../components/AboutSection/About";
import CTAsection from "../components/CTAsection/CTAsection";
import LookingFresher from "../components/LookingFresher/LookingFresher";

const page = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <About />
      <CTAsection />
      <LookingFresher />
    </div>
  );
};

export default page;
