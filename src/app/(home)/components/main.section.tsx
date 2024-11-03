"use client";

// components/MainSection.js
import { useState, useEffect } from "react";
import image1 from "../../../../public/assets/img/48e1ed0354fd2194a114ac06c46ee3d7.png";
import image2 from "../../../../public/assets/img/cs2.png"; // Ensure this image exists
import image3 from "../../../../public/assets/img/cs3.png"; // Ensure this image exists
import Image from "next/legacy/image";

const images = [image1, image2, image3]; // Array of images

const MainSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-start justify-start bg-gray-900 text-white h-[700px]">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <div className="relative z-10 p-8 max-w-2xl ml-8 mt-10">
          <h2 className="text-3xl mb-4 mt-10">Our Latest Order</h2>
          <h2 className="text-5xl font-bold mb-9">Aventurine Ring</h2>
          <p className="text-xl mb-8">
            Produce an image of an aventurine ring featuring shimmering green
            gemstones flecked with golden inclusions, evoking the beauty of
            sunlight filtering through leaves.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded">
            Order Your Own
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentImageIndex ? "bg-yellow-500" : "bg-gray-400"
              }`}
              onClick={() => setCurrentImageIndex(index)} // Optional: Allow clicking on dots to change images
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainSection;
