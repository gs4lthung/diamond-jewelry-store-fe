import {
  Navbar as NextUINavbar,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <NextUINavbar className="bg-white text-gray-800 shadow-sm" maxWidth="xl" position="static" style={{ top: 80 }}>
      <div className="flex items-center justify-center gap-8 py-4 w-full max-w-4xl mx-auto">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              href={item.href}
              className={clsx(
                "text-gray-700 hover:text-orange-600 font-medium transition-colors",
                item.label === "Jewelry" && "text-orange-500"
              )}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </div>
    </NextUINavbar>
  );
};
