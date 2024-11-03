// components/AboutSection.js
import { FaGem, FaLayerGroup, FaShieldAlt, FaUsers } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="flex flex-col items-center py-16 px-8 bg-white text-center">
      {/* Title and Subtitle */}
      <h1 className="text-4xl font-bold text-orange-500">
        KIRA Jewelry - <span className="text-black">The paradise of diamond jewelry</span>
      </h1>
      <p className="mt-6 text-gray-700 max-w-3xl leading-relaxed">
        Welcome to KIRA Jewelry, where the beauty of each unique gemstone jewelry meets exquisite craftsmanship. 
        Our curated collection features a diverse range of precious and semi-precious gemstones, including Ruby, Sapphire, Emerald, Topaz, Garnet, Peridot, Quartz, and Tourmaline, each chosen for its unique beauty and symbolism. 
        Crafted with precision and attention to detail, our pieces exude elegance and sophistication, making them perfect for any occasion. 
        Whether you're searching for a statement necklace, a pair of sparkling earrings, or a meaningful bracelet, KIRA Jewelry offers timeless pieces designed to inspire harmony and elevate your style.
      </p>

      {/* Values Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl p-10 m-10">
        <div className="flex flex-col items-center ">
          <FaGem className="text-orange-500 text-3xl" />
          <h3 className="mt-4 font-semibold">PREMIUM QUALITY</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaLayerGroup className="text-orange-500 text-3xl" />
          <h3 className="mt-4 font-semibold">DIVERSE PRODUCTS</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaShieldAlt className="text-orange-500 text-3xl" />
          <h3 className="mt-4 font-semibold">3-YEAR WARRANTY</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaUsers className="text-orange-500 text-3xl" />
          <h3 className="mt-4 font-semibold">JOIN OUR FANPAGE</h3>
        </div>
      </div>
    </section>
  );
}
