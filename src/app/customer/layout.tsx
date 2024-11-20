"use client";

import Footer from "@/components/footer";
import { HeaderAuth } from "@/components/headerAuth";
import { HeaderLogo } from "@/components/headerlogo";
import MenuSideBarCus from "@/components/menuSideBarCus";
import { Navbar } from "@/components/navbar";
import React, { useEffect, useState } from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className={`${isScrolled ? 'hidden' : ''}`}>
        <HeaderAuth />
        <HeaderLogo />
        <Navbar/>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <MenuSideBarCus />

        {/* Main Content */}
        <div className="flex-1 p-6 ml-4 mt-0">{children}</div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

