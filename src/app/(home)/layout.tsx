import Footer from "@/components/footer";
import { HeaderAuth } from "@/components/headerAuth";
import { HeaderLogo } from "@/components/headerlogo";
import { Navbar } from "@/components/navbar";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "0",  // Giảm padding xuống tối thiểu
          zIndex: 50,
          transform: "translateY(-5px)",
          backgroundColor: "white", // Adjust this value to push it up further
        }}
      >
        <HeaderAuth />
        <HeaderLogo />
        <Navbar />
      </div>
      <main className="flex-grow w-full mt-[120px]">{children}</main> {/* Adjust mt based on header height */}
      <Footer />
    </div>
  );
}
