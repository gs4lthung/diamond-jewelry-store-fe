import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="h-screen">{children}</div>
      <Footer />
    </div>
  );
}
