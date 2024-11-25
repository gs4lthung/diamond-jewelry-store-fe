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
import ModalCreateDiamond from "@/components/modelCreateDiamond";
import ModalUpdateDiamondProps from "@/components/modalUpdateDiamond";
import ModalDeleteDiamond from "@/components/modalDeleteDiamond";
import { DiamondInfor, DiamondPriceDetail } from "@/models/shopModel";
import ModalViewDiamondDetail from "@/components/modalViewDiamond";

const ManageDiamondProducts = () => {
  // Hardcoded diamond data using DiamondInfor structure
  const [diamonds, setDiamonds] = useState<DiamondInfor[]>([
    {
      slug: null,
      diamond_id: "1",
      diamond_code: "RB1001",
      diamond_name: "Round Brilliant Diamond",
      origin: "South Africa",
      proportions: 95,
      polish: 90,
      symmetry: 95,
      flowescense: 0,
      colors: "D",
      Cut: "Round",
      Carat_weight: "1.0",
      Status: true,
      Product_Id: "101",
    },
    {
      slug: null,
      diamond_id: "2",
      diamond_code: "PC1002",
      diamond_name: "Princess Cut Diamond",
      origin: "Russia",
      proportions: 90,
      polish: 85,
      symmetry: 90,
      flowescense: 0,
      colors: "E",
      Cut: "Princess",
      Carat_weight: "0.9",
      Status: true,
      Product_Id: "102",
    },
    {
      slug: null,
      diamond_id: "3",
      diamond_code: "OV1003",
      diamond_name: "Oval Diamond",
      origin: "Canada",
      proportions: 88,
      polish: 80,
      symmetry: 85,
      flowescense: 1,
      colors: "F",
      Cut: "Oval",
      Carat_weight: "1.2",
      Status: false,
      Product_Id: "103",
    },
  ]);

  // Simulated diamond price list data
  const diamondPrices: DiamondPriceDetail[] = [
    {
      Dia_PList_id: "1",
      Origin: "South Africa",
      Ct_Weight_From: 0.5,
      Ct_Weight_To: 1.0,
      Color: "D",
      Clarity: "VVS1",
      Cut: "Round",
      Price: 5000,
      Eff_date: "2024-01-01",
    },
    {
      Dia_PList_id: "2",
      Origin: "Russia",
      Ct_Weight_From: 1.0,
      Ct_Weight_To: 2.0,
      Color: "E",
      Clarity: "VS2",
      Cut: "Princess",
      Price: 8000,
      Eff_date: "2024-01-10",
    },
    {
      Dia_PList_id: "3",
      Origin: "Canada",
      Ct_Weight_From: 0.5,
      Ct_Weight_To: 1.5,
      Color: "F",
      Clarity: "IF",
      Cut: "Oval",
      Price: 10000,
      Eff_date: "2024-02-15",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiamondPrice, setSelectedDiamondPrice] = useState<
    DiamondPriceDetail | null
  >(null);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredDiamonds = diamonds.filter((diamond) =>
    diamond.diamond_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewPrice = (diamondId: string) => {
    const priceDetail = diamondPrices.find(
      (price) => price.Dia_PList_id === diamondId
    );
    console.log("Diamond ID:", diamondId);
    console.log("Price Detail Found:", priceDetail);
    if (priceDetail) {
      setSelectedDiamondPrice(priceDetail);
      setIsPriceModalOpen(true);
    } else {
      console.error("No price detail found for this diamond ID.");
    }
  };

  const closePriceModal = () => {
    setSelectedDiamondPrice(null);
    setIsPriceModalOpen(false);
  };

  return (
    <div className="max-w-[95rem] w-full flex flex-col gap-4">
      <p className="text-black text-3xl font-semibold mb-2">
        Diamond Product Management
      </p>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search diamonds"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <ModalCreateDiamond />
        </div>
      </div>

      <div className="max-w-[95rem] mx-auto w-full">
        {filteredDiamonds.length === 0 ? (
          <div className="flex justify-center">
            <p className="text-2xl font-bold">No diamonds found</p>
          </div>
        ) : (
          <Table aria-label="Diamond Product Table">
            <TableHeader>
              <TableColumn>Code</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>Origin</TableColumn>
              <TableColumn>Carat</TableColumn>
              <TableColumn>Color</TableColumn>
              <TableColumn>Cut</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {filteredDiamonds.map((diamond) => (
                <TableRow key={diamond.diamond_id}>
                  <TableCell>{diamond.diamond_code}</TableCell>
                  <TableCell>{diamond.diamond_name}</TableCell>
                  <TableCell>{diamond.origin}</TableCell>
                  <TableCell>{diamond.Carat_weight}</TableCell>
                  <TableCell>{diamond.colors}</TableCell>
                  <TableCell>{diamond.Cut}</TableCell>
                  <TableCell>{diamond.Status ? "Available" : "Sold"}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() => handleViewPrice(diamond.diamond_id)}
                        className="bg-blue-500 text-white"
                      >
                        View Price
                      </Button>
                      <ModalUpdateDiamondProps
                        params={diamond}
                        refetchData={() => {}}
                      />
                      <ModalDeleteDiamond
                        params={diamond.diamond_id}
                        refetchData={() => {}}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Price Modal */}
      {selectedDiamondPrice && (
        <ModalViewDiamondDetail
          diamond={selectedDiamondPrice}
          isOpen={isPriceModalOpen}
          onClose={closePriceModal}
        />
      )}
    </div>
  );
};

export default ManageDiamondProducts;
