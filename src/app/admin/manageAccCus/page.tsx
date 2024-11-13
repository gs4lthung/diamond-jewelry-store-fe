"use client"

import React from "react";
import { Card, CardBody } from "@nextui-org/react";

export default function ManageAccCus() {
  const customers = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive",
    },
    {
      name: "Marvin McKinney",
      company: "Tesla",
      phone: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "Active",
    },
    {
      name: "Jerome Bell",
      company: "Google",
      phone: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: "Active",
    },
    {
      name: "Kathryn Murphy",
      company: "Microsoft",
      phone: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
      status: "Active",
    },
    {
      name: "Jacob Jones",
      company: "Yahoo",
      phone: "(208) 555-0127",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: "Active",
    },
    {
      name: "Kristin Watson",
      company: "Facebook",
      phone: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Aland Islands",
      status: "Inactive",
    },
  ];

  return (
    <div className="p-6  min-h-screen bg-white">
      <Card>
        <CardBody>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">All Customers</h1>
              <p className="text-gray-500">Active Members</p>
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
            {customers.map((customer, index) => (
              <div
                key={index}
                className="grid grid-cols-6 p-4 items-center text-sm hover:bg-gray-100 transition-colors"
              >
                <div className="col-span-1 font-semibold text-gray-700">
                  {customer.name}
                </div>
                <div className="col-span-1 text-gray-600">{customer.company}</div>
                <div className="col-span-1 text-gray-600">{customer.phone}</div>
                <div className="col-span-1 text-gray-600">{customer.email}</div>
                <div className="col-span-1 text-gray-600">{customer.country}</div>
                <div className="col-span-1">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
            <p>Showing data 1 to 8 of 256K entries</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-200 rounded">1</button>
              <button className="px-3 py-1 bg-gray-200 rounded">2</button>
              <button className="px-3 py-1 bg-gray-200 rounded">3</button>
              <span className="px-3 py-1">...</span>
              <button className="px-3 py-1 bg-gray-200 rounded">10</button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
//     <div className="lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
//     <h3 className="text-xl font-semibold">Danh sách tài khoản khách hàng</h3>
//     {/* <div className="mb-5 mt-5 flex justify-between items-center">
//         <QuantityCustomer />
//     </div> */}
//     <div className="max-w-[95rem] mx-auto w-full">
//         {loading ? (
//             <div className="flex justify-center items-center h-40">
//                 <Spinner />
//             </div>
//         ) : (
//             customers.length === 0 ? (
//                 <div>Không có khách hàng nào</div>
//             ) : (
//                 <>
//                     <div className="p-4 mb-4 bg-gray-100 rounded-md">
//                         <span className="font-semibold">Tổng số tài khoản: </span>
//                         <span>{total.totalAccount}</span>
//                     </div>
//                     <Table aria-label="Example static collection table">
//                         <TableHeader>
//                             <TableColumn>Tên Khách hàng</TableColumn>
//                             <TableColumn>Email</TableColumn>
//                             <TableColumn>Số điện thoại</TableColumn>

//                             <TableColumn>Hành động</TableColumn>
//                         </TableHeader>
//                         <TableBody>
//                             {customers.map((customer) => (
//                                 <TableRow key={customer.id}>
//                                     <TableCell>{customer.username}</TableCell>
//                                     <TableCell>{customer.email}</TableCell>
//                                     <TableCell>{customer.phone}</TableCell>

//                                     <TableCell>
//                                         <div className="flex items-center gap-4">
//                                             <AccountCusDetail params={customer.id} />
//                                             <DeleteCus params={customer.id} refetchCustomers={fetchCustomers} />
//                                         </div>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </>
//             )
//         )}
//     </div>
// </div>
  );
}