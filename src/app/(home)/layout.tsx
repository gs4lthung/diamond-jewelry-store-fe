"use client";

import Footer from "@/components/footer";
import { HeaderAuth } from "@/components/headerAuth";
import { HeaderLogo } from "@/components/headerlogo";
import { Navbar } from "@/components/navbar";
import React, { useEffect, useState } from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "0",
          zIndex: 50,
          transform: "translateY(-5px)",
          backgroundColor: "white",
        }}
      >
        {!isScrolled && <HeaderAuth />}
        {!isScrolled && <HeaderLogo />}
        <Navbar />
      </div>
      <main className="flex-grow w-full mt-[120px]">{children}</main>
      <Footer />
    </div>
  );
}
