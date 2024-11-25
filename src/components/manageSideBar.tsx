"use client";

import React, { useState } from "react";
import { FaAccessibleIcon, FaBars, FaUsers } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { MdOutlineEmojiFoodBeverage, MdWorkHistory, MdWorkspacePremium, MdWorkspacesFilled } from "react-icons/md";
import Cookies from "js-cookie";
import { Button, Divider, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function SideBarManager() {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = async () => {
    await localStorage.clear();
    Cookies.remove("token");
    router.replace("/signIn");
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex flex-col h-screen bg-gradient-to-br from-blue-600 to-blue-900 text-gray-100 transition-all duration-300 shadow-lg ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        {!isCollapsed && <h1 className="text-xl font-bold">MANAGER</h1>}
        <Button
          isIconOnly
          onClick={toggleSidebar}
          className="bg-transparent text-gray-200 hover:bg-blue-500"
        >
          <FaBars />
        </Button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col gap-6 mt-4">
          <Divider className="bg-blue-400" />
          <MenuItem
            href="/manager"
            icon={<BiHome className="w-6 h-6 text-gray-200" />}
            text="Dashboard"
            isCollapsed={isCollapsed}
          />
          <Divider className="bg-blue-400" />
          <MenuItem
            href="/manager/manageProduct"
            icon={<MdWorkspacePremium className="w-6 h-6 text-gray-200" />}
            text="Manage Product"
            isCollapsed={isCollapsed}
          />
          <Divider className="bg-blue-400" />
          <MenuItem
            href="/manager/manageDiamond"
            icon={<MdWorkspacesFilled className="w-6 h-6 text-gray-200" />}
            text="Manage Diamond"
            isCollapsed={isCollapsed}
          />
          <Divider className="bg-blue-400" />
          <MenuItem
            href="/manager/order"
            icon={<FaUsers className="w-6 h-6 text-gray-200" />}
            text="Order Product"
            isCollapsed={isCollapsed}
          />
          <Divider className="bg-blue-400" />
          <MenuItem
            href="/manager/checkQuantity"
            icon={<MdOutlineEmojiFoodBeverage className="w-6 h-6 text-gray-200" />}
            text="Check quantity"
            isCollapsed={isCollapsed}
          />
          <Divider className="bg-blue-400" />
          {/* <MenuItem
            href="/manager/time"
            icon={<FaUsers className="w-6 h-6 text-gray-200" />}
            text="Working Time"
            isCollapsed={isCollapsed}
          />
          <Divider className="bg-blue-400" /> */}
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex items-center justify-center py-4">
        {!isCollapsed ? (
          <Button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 text-white w-full font-semibold"
          >
            Logout
          </Button>
        ) : (
          <Button
            isIconOnly
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 text-white"
          >
            🚪
          </Button>
        )}
      </div>
    </div>
  );
}

// Component for Menu Item
function MenuItem({ href, icon, text, isCollapsed }: any) {
  return (
    <div className="flex items-center px-4 py-3 cursor-pointer rounded-lg transition-all hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500">
      <Link href={href} className="flex items-center gap-4 w-full">
        {icon}
        {!isCollapsed && (
          <span className="text-lg font-medium text-gray-100 hover:text-white">
            {text}
          </span>
        )}
      </Link>
    </div>
  );
}
