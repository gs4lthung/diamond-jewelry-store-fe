import {
  Navbar as NextUINavbar,
  NavbarBrand,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import imageLogo from "../../public/assets/img/download.png";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <NextUINavbar
      className="bg-white text-gray-800 shadow-sm"
      maxWidth="xl"
      position="sticky"
      style={{ top: 0, zIndex: 50 }} // Ensures it's on top of other content
    >
      <div className="flex items-center justify-center gap-8 py-4 w-full max-w-4xl mx-auto">
        <NextLink href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
          <Image
            src={imageLogo}
            alt="Logo"
            width={80}
            height={80}
            className="inline"
          />
        </NextLink>
        <p className="text-2xl font-bold text-gray-800">NTK DIAMOND</p>
      </div>
    </NextUINavbar>
  );
};
