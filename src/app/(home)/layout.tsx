
import Footer from "@/components/guestFooter/page";
import { Navbar } from "@/components/guestHeader/page";

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
