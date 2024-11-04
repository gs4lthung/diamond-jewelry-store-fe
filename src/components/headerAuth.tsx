import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import imageLogo from "../../public/assets/img/download.png";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export const HeaderAuth = () => {
  return (
    <NextUINavbar className="bg-white text-gray-800 shadow-sm " maxWidth="xl" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* Right-aligned Sign In / Sign Up Links */}
      <div className="ml-auto">
        <NavbarContent className="flex gap-8 ml-40"> {/* ml-auto pushes content to the right */}
          <NavbarItem>
            <Link href="/signIn" className="text-gray-700 hover:text-orange-600 font-medium">
              Sign In
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/signUp" className="text-gray-700 hover:text-orange-600 font-medium">
              Sign Up
            </Link>
          </NavbarItem>
        </NavbarContent>
      </div>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className={clsx(
                  item.label === "Jewelry" ? "text-orange-500" : "text-gray-700",
                  "hover:text-orange-600 transition-colors"
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
