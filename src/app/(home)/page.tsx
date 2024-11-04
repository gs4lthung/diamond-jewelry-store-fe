import Image from "next/legacy/image";
import React from "react";
import MainSection from "./components/main.section";
import AboutSection from "./components/about.section";
import SpecialCollection from "./components/special.section";
import CarouselService from "./components/carouselService";
import InspiringDesign from "./components/inspiringDesign";
import BrilliantSection from "./components/BrilliantSection";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100">
        <MainSection />
        <AboutSection />
        <SpecialCollection />
        <CarouselService />
        <InspiringDesign />
        <BrilliantSection />
      </div>
    </div>
  );
  ``;
}
