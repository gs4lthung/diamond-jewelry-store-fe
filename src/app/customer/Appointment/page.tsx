"use client";
import React, { useState } from "react";
import { Link } from "@nextui-org/link";
import { Card, Divider, CardBody, CardHeader } from "@nextui-org/react";
import { Calendar, Clock, MapPin, Phone, User } from "lucide-react";

type Order = {
  id: number;
  name: string;
  phone: string;
  birthday: string;
  address: string;
  services: string[];
  bookingDate: string;
  status: string;
};

const Appointment = () => {
  const [orderDetails, setOrderDetails] = useState<Order>({
    id: 1,
    name: "Ms Ursula Minta",
    phone: "0908123123",
    birthday: "21/08/2004",
    address: "8614 Finlandia Marvelous",
    services: ["Nano Acnes", "Detox 4F", "Peel Acnes"],
    bookingDate: "29/07/2024",
    status: "On-going",
  });

  return (
    // Thêm pt-20 để tránh bị header che và min-h-screen để đảm bảo chiều cao tối thiểu
    <div className="flex min-h-screen bg-gray-50 pt-10">
      {/* Sidebar - Thêm sticky top-20 để sidebar luôn visible
      <div className="w-64 bg-white shadow-lg sticky top-20 h-[calc(100vh-5rem)]">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Menu</h2>
          <ul className="space-y-4">
            <li>
              <Link 
                href="/customer/profile" 
                className="flex items-center p-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <User className="w-5 h-5 mr-3" />
                Profile
              </Link>
            </li>
            <li>
              <Link 
                href="customer/appointment" 
                className="flex items-center p-3 bg-blue-50 text-blue-600 rounded-lg font-medium"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Appointment
              </Link>
            </li>
            <li>
              <Link 
                href="/history" 
                className="flex items-center p-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Clock className="w-5 h-5 mr-3" />
                History Order
              </Link>
            </li>
          </ul>
        </div>
      </div> */}

      {/* Main Content - Thêm padding top và overflow-y-auto */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="flex flex-col items-start px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-800">Your Appointment</h2>
            <p className="text-gray-500">View your upcoming appointment details</p>
          </CardHeader>
          <Divider />
          <CardBody className="px-6 py-4">
            {/* Status Badge */}
            <div className="mb-6">
              <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                {orderDetails.status}
              </span>
            </div>

            {/* Customer Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{orderDetails.name}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{orderDetails.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Birthday</p>
                  <p className="font-medium">{orderDetails.birthday}</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">{orderDetails.address}</p>
                </div>
              </div>
            </div>

            <Divider className="my-6" />

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <div className="grid grid-cols-1 gap-3">
                {orderDetails.services.map((service, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <Divider className="my-6" />

            {/* Booking Info */}
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Booking Date</p>
                <p className="font-medium">{orderDetails.bookingDate}</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Appointment;