import Image from 'next/image';
import image1 from "../../../../public/assets/img/Johnny_Dang.webp"
import image2 from "../../../../public/assets/img/5416_johnny-dang-tu-tho-sua-dong-ho-cho-troi-thanh-vua-kim-hoan-hollywood-75c39773.png"
const BrilliantSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Be a Part of Something Brilliant</h2>
        <p className="text-gray-600 mt-2">
          Follow us on Instagram for gorgeous engagement rings and wedding bands, real-life proposals, and dreamy wedding day inspiration.
          Be sure to tag us in your Blue Nile jewelry pics <span className="font-semibold">@bluenilediamond</span> for a chance to be featured.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-4xl">
        <div className="relative h-48 h-[300px]">
          <Image src={image1} alt="Engagement Photo 1" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="relative h-48">
          <Image src={image2} alt="Engagement Photo 2" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="relative h-48 h-[300px]">
          <Image src={image1} alt="Engagement Photo 1" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        {/* <div className="relative h-48 md:row-span-2">
          <Image src="/path-to-image3.jpg" alt="Engagement Photo 3" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="relative h-48">
          <Image src="/path-to-image4.jpg" alt="Engagement Photo 4" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="relative h-48">
          <Image src="/path-to-image5.jpg" alt="Engagement Photo 5" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="relative h-48">
          <Image src="/path-to-image6.jpg" alt="Engagement Photo 6" layout="fill" objectFit="cover" className="rounded-lg" />
        </div> */}
      </div>
    </section>
  );
};

export default BrilliantSection;
