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
      <HeaderAuth />
      <HeaderLogo />
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
}
