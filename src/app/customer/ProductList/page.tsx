"use client";
import React, { useState } from "react";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Input } from "@nextui-org/react";

const ProductList = () => {
    // Dữ liệu sản phẩm từ code cũ
    const orders = [
        {
            id: "#10234978",
            productName: "Navier Pearl Serum",
            quantity: 1,
            price: 149.99,
            orderDate: "21 Feb, 2024",
            status: "Delivered",
            expectedDelivery: "25 Feb, 2024",
        },
        {
            id: "#10234979",
            productName: "Navier Pearl Serum",
            quantity: 1,
            price: 149.99,
            orderDate: "22 Feb, 2024",
            status: "Cancelled",
            expectedDelivery: "26 Feb, 2024",
        },
    ];
      // Khai báo trạng thái để theo dõi sản phẩm được chọn
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  // Hàm để thêm/xóa sản phẩm khỏi danh sách chọn
  const toggleSelectProduct = (id: string) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id) // Xóa nếu đã tồn tại
        : [...prevSelected, id] // Thêm nếu chưa có
    );
  };

    return (
        <div className="max-w-4xl mx-auto p-6 ">
            <h2 className="text-2xl font-semibold mb-4 text-center">Shopping Cart</h2>
            <div className="bg-white shadow-lg rounded-lg p-4">
                <Table aria-label="Order History">
                    <TableHeader>
                        <TableColumn>Select</TableColumn>
                        <TableColumn>Product</TableColumn>
                        <TableColumn>Quantity</TableColumn>
                        <TableColumn>Price</TableColumn>
                        <TableColumn>Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>
                                    <button
                                        className={`w-6 h-6  border-2 ${selectedProducts.includes(order.id)
                                                ? "bg-green-500 border-green-500"
                                                : "bg-white border-gray-300"
                                            }`}
                                        onClick={() => toggleSelectProduct(order.id)}
                                    >
                                        {selectedProducts.includes(order.id) && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="white"
                                                className="w-4 h-4"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="https://via.placeholder.com/50"
                                            alt={order.productName}
                                            className="w-12 h-12 rounded object-cover"
                                        />
                                        <div>
                                            <p className="font-medium">{order.productName}</p>
                                            <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded-l">-</button>
                                        <span className="px-4">{order.quantity}</span>
                                        <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded-r">+</button>
                                    </div>
                                </TableCell>
                                <TableCell>${order.price.toFixed(2)}</TableCell>
                                <TableCell>
                                    <button className="text-red-500 hover:text-red-700">Remove</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>

                <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
                    <Input
                        placeholder="Discount code/gift card"
                        className="flex-1"
                    />
                    <Button className="bg-blue-500 text-white">Apply</Button>
                </div>

                <div className="mt-6 flex justify-end">
                    <Button className="bg-yellow-500 text-white w-full md:w-auto">
                        Proceed to Pay
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
