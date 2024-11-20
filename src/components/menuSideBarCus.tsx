import React, { useState } from "react";
import { Link } from "@nextui-org/link"; // assuming next/link is being used for routing
import { User, Calendar, Clock } from "lucide-react"; // import icons from lucide-react

const MenuSideBarCus = () => {
  const [activeLink, setActiveLink] = useState<string>(""); // Track the active menu item

  const handleClick = (link: string) => {
    setActiveLink(link); // Set the active link when an item is clicked
  };

  return (
    <div className="w-64 bg-white shadow-lg sticky top-20 h-[calc(100vh-5rem)]">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Menu</h2>
        <ul className="space-y-4">
          <li>
            <Link
              href="/customer/profile"
              onClick={() => handleClick("profile")}
              className={`flex items-center p-3 rounded-lg transition-colors ${activeLink === "profile" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <User className="w-5 h-5 mr-3" />
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/customer/Appointment"
              onClick={() => handleClick("appointment")}
              className={`flex items-center p-3 rounded-lg transition-colors ${activeLink === "appointment" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <Calendar className="w-5 h-5 mr-3" />
              Appointment
            </Link>
          </li>
          <li>
            <Link
              href="/customer/HistoryOrder"
              onClick={() => handleClick("historyorder")}
              className={`flex items-center p-3 rounded-lg transition-colors ${activeLink === "historyorder" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <Clock className="w-5 h-5 mr-3" />
              History Order
            </Link>
          </li>
          <li>
            <Link
              href="/customer/ProductList"
              onClick={() => handleClick("productlist")}
              className={`flex items-center p-3 rounded-lg transition-colors ${activeLink === "productlist" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <Clock className="w-5 h-5 mr-3" />
              Product List Bought
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuSideBarCus;
