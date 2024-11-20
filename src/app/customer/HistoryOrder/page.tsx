"use client";
import React, { useState } from "react";
import { Link } from "@nextui-org/link";
import { Card, CardBody, Button, Pagination } from "@nextui-org/react";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";

type OrderItem = {
  id: string;
  orderDate: string;
  product: {
    name: string;
    image: string;
    price: number;
    quantity: number;
  };
  status: "Delivered" | "Cancelled" | "Pending";
  expectedDelivery: string;
};

const HistoryOrder = () => {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Mock data for orders
  const orders: OrderItem[] = [
    {
      id: "#10234978",
      orderDate: "21 Feb, 2024",
      product: {
        name: "Navier Pearl Serum",
        image: "/api/placeholder/200/200",
        price: 149.99,
        quantity: 1
      },
      status: "Cancelled",
      expectedDelivery: "25 Feb, 2024"
    },
    {
      id: "#10234979",
      orderDate: "21 Feb, 2024",
      product: {
        name: "Navier Pearl Serum",
        image: "/api/placeholder/200/200",
        price: 149.99,
        quantity: 1
      },
      status: "Delivered",
      expectedDelivery: "25 Feb, 2024"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 pt-10">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <Card className="w-full">
          <CardBody className="p-6">
            {/* Filter Tabs */}
            <div className="flex space-x-4 mb-6 border-b">
              {["All Orders", "Completed", "Cancelled"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 px-4 ${
                    activeTab === tab
                      ? "border-b-2 border-orange-500 text-orange-500"
                      : "text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Date Filter */}
            <div className="flex justify-end mb-6 space-x-2">
              <input
                type="date"
                className="border rounded px-3 py-1"
                placeholder="From"
              />
              <span className="self-center">To</span>
              <input
                type="date"
                className="border rounded px-3 py-1"
                placeholder="To"
              />
              <Button color="primary" size="sm">
                Show filters
              </Button>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-lg p-4 flex items-center justify-between"
                >
                  {/* Order Info */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={order.product.image}
                      alt={order.product.name}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div>
                      <p className="text-sm text-gray-600">Order: {order.id}</p>
                      <p className="text-sm text-gray-600">
                        Payment: {order.orderDate}
                      </p>
                      <h3 className="font-medium mt-1">{order.product.name}</h3>
                      <p className="text-sm mt-1">
                        Qty: {order.product.quantity} × ${order.product.price}
                      </p>
                    </div>
                  </div>

                  {/* Status and Delivery */}
                  <div className="text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                      Expected Delivery
                    </p>
                    <p className="font-medium">{order.expectedDelivery}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Price */}
            <div className="flex justify-end mt-6 border-t pt-4">
              <div className="text-right">
                <p className="text-gray-600">Total Price</p>
                <p className="text-xl font-semibold">$149.99</p>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <Pagination
                total={10}
                initialPage={1}
                page={currentPage}
                onChange={setCurrentPage}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default HistoryOrder;