"use client";
import React, { useState } from "react";
import { Image, Spinner } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CarouselService() {
    const [loading, setLoading] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const services = [
        {
            id: 1,
            title: "Wellness Wisdom",
            author: "Chloe Martinez",
            date: "Aug 19",
            description: "From fitness hacks to stress-busting strategies, we're here to...",
            imageUrl: "https://img.pikbest.com/wp/202347/3d-rendering-rendered-diamond-image_9770992.jpg!w700wp"
        },
        {
            id: 2,
            title: "Jewelry Trends",
            author: "Chloe Martinez",
            date: "Aug 19",
            description: "Explore the latest jewelry trends and styles...",
            imageUrl: "https://img.pikbest.com/wp/202347/3d-rendering-rendered-diamond-image_9770992.jpg!w700wp"
        },
        {
            id: 3,
            title: "Healthy Living",
            author: "Chloe Martinez",
            date: "Aug 19",
            description: "Tips for a balanced and healthy lifestyle...",
            imageUrl: "https://img.pikbest.com/wp/202347/3d-rendering-rendered-diamond-image_9770992.jpg!w700wp"
        },
        {
            id: 4,
            title: "Fashion Tips",
            author: "Chloe Martinez",
            date: "Aug 19",
            description: "Stay stylish with these fashion tips...",
            imageUrl: "https://s3-alpha-sig.figma.com/img/939c/7839/d03b347ea7c421c69a617894c206319c..."
        },
        {
            id: 5,
            title: "Beauty Secrets",
            author: "Chloe Martinez",
            date: "Aug 19",
            description: "Discover beauty secrets and skincare routines...",
            imageUrl: "https://img.pikbest.com/wp/202347/3d-rendering-rendered-diamond-image_9770992.jpg!w700wp"
        },
        {
            id: 5,
            title: "Beauty Secrets",
            author: "Chloe Martinez",
            date: "Aug 19",
            description: "Discover beauty secrets and skincare routines...",
            imageUrl: "https://img.pikbest.com/wp/202347/3d-rendering-rendered-diamond-image_9770992.jpg!w700wp"
        },
        {
            id: 5,
            title: "Beauty Secrets",
            author: "Chloe Martinez",
            date: "Aug 19",
            description: "Discover beauty secrets and skincare routines...",
            imageUrl: "https://img.pikbest.com/wp/202347/3d-rendering-rendered-diamond-image_9770992.jpg!w700wp"
        },
        {
            id: 5,
            title: "Beauty Secrets",
            author: "Chloe Martinez",
            date: "Aug 19",
            description: "Discover beauty secrets and skincare routines...",
            imageUrl: "https://img.pikbest.com/wp/202347/3d-rendering-rendered-diamond-image_9770992.jpg!w700wp"
        },
        {
            id: 5,
            title: "Beauty Secrets",
            author: "Chloe Martinez",
            date: "Aug 19",
            description: "Discover beauty secrets and skincare routines...",
            imageUrl: "https://img.pikbest.com/wp/202347/3d-rendering-rendered-diamond-image_9770992.jpg!w700wp"
        }

        // ... thêm các mục khác nếu cần
    ];

    const goToPrevious = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? services.length - 1 : prevSlide - 1));
    };

    const goToNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === services.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="py-8 bg-gray-50 text-center relative flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
                Recent <span className="text-orange-500">Blogs</span>
            </h2>
            <p className="text-gray-500 mb-6">Multiple blogs about different types of jewelry. Easy for you to find your favourite products.</p>
            
            {loading ? (
                <div className="flex justify-center py-3">
                    <Spinner />
                </div>
            ) : (
                <div className="relative w-[1400px] h-[450px] overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 25}%)` }} // Di chuyển mỗi thẻ bằng 25% của chiều rộng
                    >
                        {services.map((service, index) => (
                            <div key={service.id} className="w-1/4 flex-shrink-0 p-4"> {/* Đặt w-1/4 để hiển thị 4 thẻ */}
                                <div className="bg-white rounded-lg shadow-md h-[400px] overflow-hidden transition-transform transform hover:-translate-y-1">
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.title}
                                        className="w-full h-48 object-cover border-b border-gray-200"
                                    />
                                    <div className="p-4 text-left">
                                        <p className="text-sm text-gray-500 mb-1">
                                            {service.author} - {service.date}
                                        </p>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                                        <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                                        <button className="border border-gray-400 text-gray-800 py-1 px-4 rounded hover:bg-gray-200 transition-colors">
                                            Read
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-black text-orange-500 p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
                    >
                        <FaChevronLeft size={20} />
                    </div>
                    <div
                        onClick={goToNext}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-black text-orange-500 p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
                    >
                        <FaChevronRight size={20} />
                    </div>
                </div>
            )}
            <a href="#" className="text-gray-700 mt-6 text-sm underline hover:text-gray-900">EXPLORE MORE</a>
        </div>
    );
}
