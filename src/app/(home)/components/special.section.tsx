// components/SpecialCollection.js
import Image from "next/legacy/image";
import React from "react";
import image1 from "../../../../public/assets/img/cl1.png";
import image2 from "../../../../public/assets/img/cl2.png";

export default function SpecialCollection() {
  return (
    <section className="flex flex-col items-center py-16 bg-gray-900 text-center text-white">
      {/* Title and Subtitle */}
      <h2 className="text-5xl font-bold text-orange-500">Special Collection</h2>
      <p className="mt-4 text-lg text-gray-300">
        Our newest collection made from precious metals at Himalayas mountain range.
      </p>

      {/* Image Gallery */}
      <div className="mt-8 flex flex-col md:flex-row gap-8 max-w-4xl">
        <div className="flex-1">
          <Image
            src={image1}
            alt="Jewelry Image 1"
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <Image
            src={image2}
            alt="Jewelry Image 2"
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Explore More Link */}
      <a
        href="/collections/special" // Adjust the link to the actual page if needed
        className="mt-8 text-lg text-gray-300 hover:text-white transition"
      >
        EXPLORE MORE
      </a>
    </section>
  );
}
