"use client"

import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function GuestHeader() {
    return (
        <Navbar className="bg-gray-100 top-0 z-50"> {/* Change this class for background color */}
            <NavbarContent className="flex justify-center gap-4 sm:flex" justify="start">
                <NavbarItem>
                    <Link className="font-medium text-black hover:text-orange-600" color="foreground" href="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="font-medium text-black hover:text-orange-600" color="foreground" href="/">About us</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="font-medium text-black hover:text-orange-600" color="foreground" href="/">Contact</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="font-medium text-black hover:text-orange-600" color="foreground" href="/">Product</Link>
                </NavbarItem>
            </NavbarContent>
            
            <NavbarBrand className="flex justify-center text-center">
                <div>
                    <Link href="/" className="font-bold text-3xl text-black">Diamond Shop</Link>
                    <p className="font-light text-black">Best Shop Service</p>
                </div>
            </NavbarBrand>
            
            <NavbarContent className="ml-auto flex gap-10" justify="end"> {/* Use ml-auto to push to the right */}
                <NavbarItem>
                    <Link className="font-medium text-black hover:text-orange-600" color="foreground" href="/auth/signIn">Sign In</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="font-medium text-black hover:text-orange-600" color="foreground" href="/auth/signUp">Sign Up</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
