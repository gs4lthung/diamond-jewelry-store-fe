"use client";

import AccountCusDetail from "@/components/accCusDe";
import DeleteCus from "@/components/deleteAccCus";
// import { fetchAllCusPagination } from "@/lib/redux/slice/adminSlice";
// import { useAppDispatch } from "@/lib/redux/store";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function ManageAccCus() {
  const [loading, setLoading] = useState(true);

  const customers = [
    {
      id: "1",
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      id: "2",
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    // More customers here...
  ];

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Mock 1 second loading time

    return () => clearTimeout(timer);
  }, []);
  // const [customers, setCustomers] = useState<allCusPaginationData[]>([]);
  const totalCustomers = customers.length;
  // const dispatch = useAppDispatch();
//   const fetchCustomers = async () => {
//     setLoading(true);
//     try {
//         const response = await dispatch(fetchAllCusPagination());
//         setCustomers(response.payload || []);
//         const response1 = await dispatch(fetchTotalCusPagination());
//         setTotal(response1.payload || []);
//     } catch (error) {
//         console.error('Error fetching customers:', error);
//     } finally {
//         setLoading(false);
//     }
// };

// useEffect(() => {
//     fetchCustomers();

// }, [dispatch]);
  return (
    <div className="p-6 min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            All List Account Manager
          </h1>
          <p className="text-gray-500">Active Manager</p>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-lg"
          />
          <select className="p-2 border rounded-lg">
            <option>Sort by: Newest</option>
            <option>Sort by: Oldest</option>
          </select>
        </div>
      </div>

      {/* Data List */}
      <div className="grid grid-cols-1 divide-y">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Spinner />
          </div>
        ) : customers.length === 0 ? (
          <div className="text-center py-4">No account found!</div>
        ) : (
          <>
            <div className="p-4 mb-4 bg-gray-100 rounded-md">
              <span className="font-semibold">Tổng số tài khoản: </span>
              <span>{totalCustomers}</span>
            </div>
            <Table aria-label="Customer Table">
              <TableHeader>
                <TableColumn>Tên Khách hàng</TableColumn>
                <TableColumn>Email</TableColumn>
                <TableColumn>Số điện thoại</TableColumn>
                <TableColumn>Hành động</TableColumn>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        {/* Replace these with real components */}
                        <AccountCusDetail params={customer.id} />
                        <DeleteCus params={customer.id}  />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
        <p>Showing data 1 to {customers.length} of 256K entries</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded">1</button>
          <button className="px-3 py-1 bg-gray-200 rounded">2</button>
          <button className="px-3 py-1 bg-gray-200 rounded">3</button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 bg-gray-200 rounded">10</button>
        </div>
      </div>
    </div>
  );
}
