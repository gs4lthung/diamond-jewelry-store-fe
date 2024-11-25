'use client';
import React, { useState } from "react";
import {
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { Product } from "@/models/shopModel";

import ModalCreateProduct from "@/components/modelCreateProduct";
import ModalViewProduct from "@/components/modalViewProduct";
import ModalUpdateProduct from "@/components/modalUpdateProduct";
import ModalDeleteProduct from "@/components/modalDeleteProduct";

const ManageProducts = () => {
  // Hardcoded product data
  const [products, setProducts] = useState<Product[]>([
    {
      Product_id: "1",
      Product_Code: "PRD001",
      Product_name: "Diamond Necklace",
      Description: "A luxurious diamond necklace.",
      Cate_Id: "101",
      Collection_id: "201",
      Gen_id: "301",
      Dia_id: "401",
    },
    {
      Product_id: "2",
      Product_Code: "PRD002",
      Product_name: "Gold Ring",
      Description: "A stunning 18k gold ring.",
      Cate_Id: "102",
      Collection_id: "202",
      Gen_id: "302",
      Dia_id: "402",
    },
    {
      Product_id: "3",
      Product_Code: "PRD003",
      Product_name: "Silver Bracelet",
      Description: "A sleek sterling silver bracelet.",
      Cate_Id: "103",
      Collection_id: "203",
      Gen_id: "303",
      Dia_id: "403",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter((product) =>
    product.Product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[95rem] w-full flex flex-col gap-4">
      <p className="text-black text-3xl font-semibold mb-2">
        Product Management
      </p>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <ModalCreateProduct />
        </div>
      </div>

      <div className="max-w-[95rem] mx-auto w-full">
        {filteredProducts.length === 0 ? (
          <div className="flex justify-center">
            <p className="text-2xl font-bold">No products found</p>
          </div>
        ) : (
          <Table aria-label="Product Management Table">
            <TableHeader>
              <TableColumn>Code</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>Description</TableColumn>
              <TableColumn>Category ID</TableColumn>
              <TableColumn>Collection ID</TableColumn>
              <TableColumn>Gen ID</TableColumn>
              <TableColumn>Diamond ID</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.Product_id}>
                  <TableCell>{product.Product_Code}</TableCell>
                  <TableCell>{product.Product_name}</TableCell>
                  <TableCell>{product.Description}</TableCell>
                  <TableCell>{product.Cate_Id}</TableCell>
                  <TableCell>{product.Collection_id}</TableCell>
                  <TableCell>{product.Gen_id}</TableCell>
                  <TableCell>{product.Dia_id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div>
                        <ModalViewProduct params={product.Product_id} />
                      </div>
                      <div>
                        <ModalUpdateProduct
                          params={product}
                          refetchData={() => {}}
                        />
                      </div>
                      <div>
                        <ModalDeleteProduct
                          params={product.Product_id}
                          refetchData={() => {}}
                        />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
