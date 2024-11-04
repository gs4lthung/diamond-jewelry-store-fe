"use client";
import React from "react";
import { Image } from "@nextui-org/react";

export default function InspiringDesign() {
    return (
        <div className="bg-gray-100 py-16 px-4 text-center">
            {/* Title Section */}
            <div className="text-5xl font-semibold text-gray-800 mb-8">
                <h2 className="font-cursive italic text-6xl">Inspiring Design</h2>
            </div>

            {/* Category Links */}
            <div className="flex justify-center space-x-8 text-lg font-medium text-gray-500 mb-10">
                <a href="#" className="hover:text-black">Ring</a>
                <a href="#" className="hover:text-black">Necklace</a>
                <a href="#" className="hover:text-black">Bracelet</a>
                <a href="#" className="hover:text-black">Earrings</a>
                <a href="#" className="hover:text-black">Cufflink</a>
            </div>

            {/* Image Carousel */}
            <div className="flex justify-center space-x-4 mb-6">
                <div className="w-1/4">
                    <Image
                        src="https://image.made-in-china.com/202f0j00BRbksoeCMzcy/1ctw-Diamond-Engagement-Ring-Real-Diamond-Ring-14K-White-Gold-Diamond-Paved-Band-Ring-Special-Pinched-Shank-Design-for-Her.webp" // Replace with actual image URL
                        alt="Ring"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-1/4">
                    <Image
                        src="https://thumb.photo-ac.com/f2/f29def3d2948ffc50226907f8062534a_t.jpeg" // Replace with actual image URL
                        alt="Bracelet"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-1/4">
                    <Image
                        src="https://image.made-in-china.com/318f0j00BTvUkSDohLbP/GORI000844-mp4.webp" // Replace with actual image URL
                        alt="Cufflink"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <a href="#" className="text-gray-600 text-sm underline hover:text-black">EXPLORE MORE</a>

            {/* Order Now Section */}
            <div className="bg-white mt-12 py-12 px-6 shadow-lg rounded-lg text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Order Now</h3>
                <p className="text-gray-600 mb-8">
                    Follow us on Instagram for gorgeous engagement rings and wedding bands, real life proposals, and dreamy wedding day inspiration. Be sure to tag us in your Blue Nile jewelry pics <span className="font-semibold">@bluenilediamond</span> for a chance to be featured.
                </p>
                <a
                    href="#"
                    className="bg-orange-500 text-white py-3 px-6 rounded-full font-medium hover:bg-orange-600 transition-colors"
                >
                    Order Your Own
                </a>
            </div>
        </div>
    );
}
