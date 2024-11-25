'use client';
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Avatar,
} from "@nextui-org/react";
import { PiDotsSixVerticalDuotone } from "react-icons/pi";

const CardOrderShop = () => {
  // Hardcoded diamond orders
  const [orders] = useState([
    {
      id: "1",
      diamondName: "Round Brilliant Diamond",
      orderDate: "2024-11-25",
      timeSlot: "10:00 AM - 12:00 PM",
      customerName: "John Doe",
      status: "COMPLETED",
    },
    {
      id: "2",
      diamondName: "Princess Cut Diamond",
      orderDate: "2024-11-22",
      timeSlot: "2:00 PM - 3:00 PM",
      customerName: "Jane Smith",
      status: "SCHEDULED",
    },
    {
      id: "3",
      diamondName: "Oval Diamond",
      orderDate: "2024-11-20",
      timeSlot: "1:00 PM - 2:30 PM",
      customerName: "Michael Brown",
      status: "CANCELLED",
    },
    {
      id: "4",
      diamondName: "Cushion Cut Diamond",
      orderDate: "2024-11-19",
      timeSlot: "4:00 PM - 5:30 PM",
      customerName: "Emily White",
      status: "COMPLETED",
    },
  ]);

  const getColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "success";
      case "CANCELLED":
        return "danger";
      case "SCHEDULED":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <div>
      {orders.length === 0 ? (
        <div className="flex justify-center">
          <p className="text-2xl font-bold">No orders found</p>
        </div>
      ) : (
        <Table aria-label="Diamond Orders Table">
          <TableHeader>
            <TableColumn>Diamond Name</TableColumn>
            <TableColumn>Order Date</TableColumn>
            <TableColumn>Time Slot</TableColumn>
            <TableColumn>Customer Name</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>
              <span className="sr-only">Action</span>
            </TableColumn>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.diamondName}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>{order.timeSlot}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>
                  <Chip color={getColor(order.status)}>{order.status}</Chip>
                </TableCell>
                <TableCell>
                  <button
                    className="flex items-center text-blue-500 hover:underline"
                    onClick={() => alert(`View details for order ID: ${order.id}`)}
                  >
                    <PiDotsSixVerticalDuotone size={18} />
                    Details
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default CardOrderShop;
