"use client";

import React, { useState } from "react";
import { FaBars, FaUsers } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md";
import Cookies from "js-cookie";
import { Button, Divider, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function SideBarAdmin() {
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
      className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-1">
        {!isCollapsed && <h1 className="text-lg font-bold">ADMIN</h1>}
        <Button
          isIconOnly
          onClick={toggleSidebar}
          className="bg-transparent text-white hover:bg-gray-700"
        >
          <FaBars />
        </Button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col gap-4 mt-4">
          <Divider className="bg-gray-700" />
          <MenuItem
            href="/admin"
            icon={<BiHome className="w-6 h-6" />}
            text="Trang chủ"
            isCollapsed={isCollapsed}
          />
          <Divider className="bg-gray-700" />
          <MenuItem
            href="/admin/manageAccount"
            icon={<MdWorkHistory className="w-6 h-6" />}
            text="Tài khoản Quản lí"
            isCollapsed={isCollapsed}
          />
          <Divider className="bg-gray-700" />
          <MenuItem
            href="/admin/manageAccCus"
            icon={<FaUsers className="w-6 h-6" />}
            text="Tài khoản Khách hàng"
            isCollapsed={isCollapsed}
          />
          <Divider className="bg-gray-700" />
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex items-center justify-center py-4">
        {!isCollapsed ? (
          <Button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-500 text-white w-full"
          >
            Đăng xuất
          </Button>
        ) : (
          <Button
            isIconOnly
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-500 text-white"
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
    <div className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700 rounded-lg">
      <Link href={href} className="flex items-center gap-4 w-full">
        {icon}
        {!isCollapsed && <span className="text-lg">{text}</span>}
      </Link>
    </div>
  );
}
