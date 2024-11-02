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
      {/* <GuestHeader/> */}
        
        {children}
        <Footer/>
    </div>
  );
}
