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
import { ThemeSwitch } from "./theme-switch";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const HeaderAuth = () => {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0 w-5 h-5";
  const router = useRouter();
  const handleLogout = async () => {
    await localStorage.clear();
    Cookies.remove("token");
    router.replace("/signIn");
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NextUINavbar
      className="bg-white text-gray-800 shadow-sm"
      maxWidth="xl"
      style={{ position: "sticky", top: 0, zIndex: 50 }} // Use sticky to stay at the top while scrolling
    >
      {/* Right-aligned Sign In / Sign Up Links */}
      <div className="ml-auto">
        <NavbarContent justify="end">
          {isLoggedIn ? (
            <>
              {/* <NavbarItem>
                <Dropdown>
                  <DropdownTrigger>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    <Avatar name="Jane" />
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                  >
                    <DropdownItem
                      startContent={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={iconClasses}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      }
                    >
                      <Link href="/customer/profile" color="foreground">
                        Trang cá nhân
                      </Link>
                    </DropdownItem>
                    <DropdownItem
                      startContent={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={iconClasses}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.57 15.228a7 7 0 0 1 0 3.787m-1.324-2.83a9 9 0 1 0-10.485 0m10.485 0a9 9 0 1 1-10.485 0M12 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      }
                    >
                      <Link
                        href="/customer/changePasswordCus"
                        color="foreground"
                      >
                        Thay đổi mật khẩu
                      </Link>
                    </DropdownItem>

                    <DropdownItem
                      startContent={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={iconClasses}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      }
                    >
                      <Link href="/customer/orderHistory" color="foreground">
                        Lịch sử đặt hàng
                      </Link>
                    </DropdownItem>
                    <DropdownItem
                      startContent={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className={`w-6 h-6 ${iconClasses}`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      }
                    >
                      <Link href="/customer/managePet" color="foreground">
                        Danh sách thú cưng
                      </Link>
                    </DropdownItem>
                    <DropdownItem
                      onClick={handleLogout}
                      startContent={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={iconClasses}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                          />
                        </svg>
                      }
                    >
                      <p className="font-normal" color="foreground">
                        Đăng xuất
                      </p>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem> */}
            </>
          ) : (
            <>
              <NavbarContent className="flex gap-8 ml-40">
                {" "}
                {/* ml-auto pushes content to the right */}
                <NavbarItem>
                  <Link
                    href="/signIn"
                    className="text-gray-700 hover:text-orange-600 font-medium"
                  >
                    Sign In
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link
                    href="/signUp"
                    className="text-gray-700 hover:text-orange-600 font-medium"
                  >
                    Sign Up
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <ThemeSwitch />
                </NavbarItem>
              </NavbarContent>
            </>
          )}
        </NavbarContent>
      </div>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className={clsx(
                  item.label === "Jewelry"
                    ? "text-orange-500"
                    : "text-gray-700",
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
