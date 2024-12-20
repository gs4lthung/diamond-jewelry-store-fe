
import NavbarAdmin from "@/components/adminHeader";
import SideBarAdmin from "@/components/adminSideBar";
import type { Metadata } from "next";
import { Children } from "react";

export const metadata: Metadata = {
    title: "Admin",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="h-screen w-screen flex">          
                <SideBarAdmin/>                
                <NavbarAdmin>{children}</NavbarAdmin>  
                            
            </div>
            {/* <Footer /> */}

        </>

    );
}