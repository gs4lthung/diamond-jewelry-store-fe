"use client"

// components/MainSection.js
import { useState, useEffect } from "react";
import image1 from "../../../public/assets/img/48e1ed0354fd2194a114ac06c46ee3d7.png";
import image2 from "../../../public/assets/img/cs2.png"; // Ensure this image exists
import image3 from "../../../public/assets/img/cs3.png"; // Ensure this image exists
import Image from "next/image";

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
              <Image src={image} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
        <div className="relative z-10 p-8 max-w-2xl ml-8 mt-10">
          <h2 className="text-3xl mb-4 mt-10">Our Latest Order</h2>
          <h2 className="text-5xl font-bold mb-9">Aventurine Ring</h2>
          <p className="text-xl mb-8">
            Produce an image of an aventurine ring featuring shimmering green gemstones flecked with golden inclusions, evoking the beauty of sunlight filtering through leaves.
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

      {/* Welcome Section */}
      <section className="py-16 text-center bg-white">
        <h3 className="text-3xl font-semibold text-yellow-500 mb-4">
          KIRA Jewelry - The Paradise of Diamond Jewelry
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Welcome to KIRA Jewelry, where the beauty of each unique gemstone meets exquisite craftsmanship. Our curated collection features a diverse range of precious and semi-precious gemstones, including Ruby, Sapphire, Emerald, and more, each chosen for its unique beauty and symbolism. Crafted with precision and attention to detail, our pieces exude elegance and sophistication.
        </p>
      </section>

      {/* Feature Icons */}
      <section className="py-12 bg-gray-100 flex justify-around items-center text-center">
        {[
          { icon: '💎', text: 'Premium Quality' },
          { icon: '🔹', text: 'Diverse Products' },
          { icon: '🔒', text: '3-Year Warranty' },
          { icon: '📱', text: 'Join Our Fanpage' }
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-3xl text-yellow-500">{feature.icon}</span>
            <p className="text-gray-700 font-semibold mt-2">{feature.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MainSection;