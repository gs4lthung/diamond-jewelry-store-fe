import Image from "next/legacy/image";
import React from "react";
import MainSection from "./components/main.section";
import AboutSection from "./components/about.section";
import SpecialCollection from "./components/special.section";
// import CarouselService from "./components/carouselService";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100">
        <MainSection/>
        <AboutSection/>
        <SpecialCollection/>
          <div className="justify-center flex mt-10">
          <p className="text-5xl font-medium  mr-3">Recent </p>
          <p className="text-5xl font-medium  text-yellow-500 mb-2">Blogs </p>
          </div>
               
          
           
                {/* <CarouselService /> */}
           
      </div>
    </div>
  );
  ``;
}
