'use client'
import { Avatar, Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import { IoSearchCircleOutline, IoLogOut } from "react-icons/io5";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { FaUserCircle } from "react-icons/fa";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

interface Props {
    children: React.ReactNode;
}

export default function NavbarManager({ children }: Props) {
    const router = useRouter();
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0 w-5 h-5";

    const handleLogout = async () => {
        console.log('Error')
        await localStorage.clear();
        Cookies.remove('token');
        Cookies.remove('role');
        Cookies.remove('uid');
        router.replace('/logIn');
    };

    return (
        <>
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
            <Navbar
                    isBordered
                    className="w-full"
                    classNames={{
                        wrapper: "w-full max-w-full",
                    }}
                >
                    <NavbarContent className="w-full max-md:hidden">
                        {/* Any content for the left part of the navbar */}
                    </NavbarContent>
                    <NavbarContent
                        justify="end"
                        className="w-fit data-[justify=end]:flex-grow-0"
                    >
                        <Dropdown>
                            <DropdownTrigger>
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="md" />
                            </DropdownTrigger>
                            <DropdownMenu>
                            <DropdownItem

                                    startContent={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClasses}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                    }
                                    >
                                    <Link href="/shopOwner/profile" color="foreground">Profie </Link>
                                    </DropdownItem>
                                    <DropdownItem

                                    startContent={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClasses}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                    }
                                    >
                                    <Link href="/shopOwner/profile" color="foreground">Setting </Link>
                                    </DropdownItem>
                                    
                                <DropdownItem
                                    onClick={handleLogout}
                                    startContent={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClasses}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                        </svg>
                                    }
                                >
                                    Đăng xuất
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarContent>
                </Navbar>
                <div className="p-4 bg-white"> {/* Add bg-white here for the content area */}
                    {children}
                </div>
            </div>
        </>
    );
}
