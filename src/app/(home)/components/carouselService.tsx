// 'use client';
// import React, { ReactNode, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { Image, Spinner } from "@nextui-org/react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import image1 from "../../../../public/assets/img/ct1.jpg"
// export default function CarouselService() {
//     const [loading, setLoading] = useState(false);

//     // Sample service data
//     const services = [
//         {
//             id: 1,
//             title: "Wellness Wisdom",   
//             author: "Chloe Martinez",
//             date: "Aug 19",
//             description: "From fitness hacks to stress-busting strategies...",
//             imageUrl: "https://s3-alpha-sig.figma.com/img/0266/40b9/bf529ee62d445f891a001f3a9a50c79b?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pK9enONmKzepvb4j30SXl6hbUq9S6ev6M3taBu-Ljf8ijlY6JG1EtI6DfsrjtfHH5YIFg1LLYH6Obwq-xtYc6vwTZtgT5c~kjtH3SQqac1U30YgZ81Ic5EJUtwxiCbAghBJStyLVL92tHjIUMlH1zOLY9AjbeR5Wvp1wDjRluZUmln5my4JGHE96OnVSMBP5peSbL30hhdwkPQASKtMuvE1u0n9H3vsbmhsKTff-rJB9j2WfKf9quSe3S2KnwzrZbonq98HX0kTJ3DuVzfdYgbG5VYWBn0HwifQ1pUi1Yqa-mjqrUVtUQbovTBaE3pfjSTng67C-fOlwX~Q1oe3-CA__"
//         },
//         {
//             id: 2,
//             title: "Jewelry Trends",
//             author: "Chloe Martinez",
//             date: "Aug 19",
//             description: "Explore the latest jewelry trends and styles...",
//             imageUrl: "https://s3-alpha-sig.figma.com/img/c26a/a740/7ee5c7d5bcb9d6e828903880ab4d374a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERY22MNKWdDSdqeHg7qnnMn5D1lDQjNUQgKUKh4cxh0qaI6jEx1u5r-0gXf9yW47v3XJHDWvMjH5YIX9kCfYgoDarzyeqCXUW1mzfroAm0kSUgYmSlZeBU6XkTiMh2ZOK0r7~NNy5zKA9UFMlsMEJWU802NoeTqye-HMPyIGAwLPfrfDWvzGVJnXiKKUbwEkLYAxpHezCbOmvufgckDHrevIsiVG2XuUEhkt3Mogrq4zcJ1GGCk5Z~GkEsiVrZlw10nXWkIWP48jEGKmeeo8EjH5OxHyx0nlvdDMbZz~3ncrAmL1ErRwYTEK7jQzVOdYRavUZPF9kiaddl83Mc0Vgw__"
//         },
//         {
//             id: 3,
//             title: "Healthy Living",
//             author: "Chloe Martinez",
//             date: "Aug 19",
//             description: "Tips for a balanced and healthy lifestyle...",
//             imageUrl: "https://s3-alpha-sig.figma.com/img/9b30/15f9/643b139e9d92e747d3a9cce61886b48a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CtMI4havMdJHHowWsdN7qanl-X9cC9Dmy6~QO-AHe9YSSlptkhlpLD6sf05a3rdYSgiRgGu5rCN5bH5~V~wAUbk01lmjlo8y7sIz9mBqeLjyZLs8nSr8y1FLyHzlIYAQ1lcFX5GJ03qG-g2nsN9jJCOfyXH90ocZ4JIhHKxBS8QkJQ8ikJCYSObhc9ftPCdgFytUPBrTJKIo6BQnvkMCRhtznyejl-LEJVfv-yLATSoSXqFPxpUktOx0I4-nac66jSxmAKejDfG8paPudyas7r6xzjo6rTpPVKp~bb5ptTifmESXECzffTM1MPO4nAKOSufcJxtUKkMtILck8mzOEw__"
//         },
//         {
//             id: 4,
//             title: "Fashion Tips",
//             author: "Chloe Martinez",
//             date: "Aug 19",
//             description: "Stay stylish with these fashion tips...",
//             imageUrl: "https://s3-alpha-sig.figma.com/img/939c/7839/d03b347ea7c421c69a617894c206319c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEz2ZekAOVvSeYKGgf1B6sdLsihptYTq1cUNWM9dfgso5ofnN11Csf76llV-JJnLa7uYaLb77BqPh3kxktI1nSmeopXcpUF~LaXPeyq1BpOfmWHKwv4q59i9TakNNImdSy7~DPFNjvnoLUehnPp2T9aKzqiXOHZiAa1zNMotQeJReaHzaqo7dydxmZ8uiegdM5WvizcI5T3OCa~2s51mK6VwebI0udV642mK4-ahodNpVAZWmbk5OIKDWBHwZNmq8NsGfzwJ7osvaVKBsJFScPiTIyWQuOZBY-iKsPzb3iLZJ4lkIyQ8JMBL22SzPSQAzqSeG~val9Llr~W0w92GsQ__"
//         }
//     ];

//     // Custom arrow components
//     const PreviousArrow = (props:any) => (
//         <div
//             onClick={props.onClick}
//             className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
//         >
//             <FaChevronLeft size={20} />
//         </div>
//     );

//     const NextArrow = (props:any) => (
//         <div
//             onClick={props.onClick}
//             className="absolute  top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
//         >
//             <FaChevronRight size={20} />
//         </div>
//     );

//     const settings = {
//         className: "center",
//         centerMode: true,
//         infinite: true,
//         centerPadding: "10px",
//         slidesToShow: 3,
//         speed: 500,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         dots: true,
//         nextArrow: <NextArrow />,
//         prevArrow: <PreviousArrow />,
//         appendDots: (dots : React.ReactNode) => (
//             <div className="mt-4">
//                 <ul className="flex justify-center space-x-2">{dots}</ul>
//             </div>
//         ),
//         customPaging: (i : number) => (
//             <div className="w-3 h-3 rounded-full bg-gray-400 hover:bg-orange-500 transition-colors cursor-pointer"></div>
//         )
//     };

//     return (
//         <div className="py-8 bg-gray-100 text-center justify-center relative">
//             {loading ? (
//                 <div className="flex justify-center py-3">
//                     <Spinner />
//                 </div>
//             ) : (
//                 <Slider {...settings} className="my-5">
//                     {services.map((service) => (
//                         <div className="p-4 justify-center" key={service.id}>
//                             <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1">
//                                 <Image
//                                     src={service.imageUrl}
//                                     alt={service.title}
//                                     className="w-full h-48 object-cover border-b border-gray-200"
//                                 />
//                                 <div className="p-4 text-left">
//                                     <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
//                                     <p className="text-sm text-gray-500 mb-2">
//                                         {service.author} - {service.date}
//                                     </p>
//                                     <p className="text-sm text-gray-600 mb-4">{service.description}</p>
//                                     <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
//                                         Read
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             )}
//         </div>
//     );
// }
