'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Spinner,
  DatePicker,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getLocalTimeZone, today, CalendarDate } from "@internationalized/date";

interface DiamondTypeDetail {
  id: string;
  date: string;
  name: string; // Diamond type name
  totalDiamonds: number;
  diamondsSold: number;
  availableDiamonds: number;
}

export default function DiamondPurchaseByType() {
  const [diamondData, setDiamondData] = useState<DiamondTypeDetail[]>([]);
  const [selectedDate, setSelectedDate] = useState(today(getLocalTimeZone()));
  const [loading, setLoading] = useState(true);

  const handleDateChange = (newDate: CalendarDate) => {
    setSelectedDate(newDate);
  };

  useEffect(() => {
    setLoading(true);

    // Format selected date
    const dateOnly = `${selectedDate.year}-${String(selectedDate.month).padStart(2, "0")}-${String(
      selectedDate.day
    ).padStart(2, "0")}`;

    // Simulated hardcoded diamond purchase data
    const data: DiamondTypeDetail[] = [
      {
        id: "1",
        date: "2024-11-25",
        name: "Round Brilliant",
        totalDiamonds: 150,
        diamondsSold: 80,
        availableDiamonds: 70,
      },
      {
        id: "2",
        date: "2024-11-25",
        name: "Princess Cut",
        totalDiamonds: 100,
        diamondsSold: 50,
        availableDiamonds: 50,
      },
      {
        id: "3",
        date: "2024-11-26",
        name: "Oval",
        totalDiamonds: 80,
        diamondsSold: 30,
        availableDiamonds: 50,
      },
      {
        id: "4",
        date: "2024-11-26",
        name: "Cushion Cut",
        totalDiamonds: 120,
        diamondsSold: 70,
        availableDiamonds: 50,
      },
    ];

    // Filter data based on the selected date
    const filteredData = data.filter((d) => d.date === dateOnly);

    setDiamondData(filteredData);
    setLoading(false);
  }, [selectedDate]);

  return (
    <div className="relative">
      <p className="text-black text-3xl font-semibold mb-2">Diamond Purchase by Type</p>
      <div className="w-1/4">
        <DatePicker
          label="Select Date"
          className="w-full"
          onChange={handleDateChange}
          minValue={today(getLocalTimeZone())}
          defaultValue={today(getLocalTimeZone())}
        />
      </div>
      <div>
        {loading ? (
          <div className="flex justify-center mt-10">
            <Spinner size="lg" />
          </div>
        ) : diamondData.length === 0 ? (
          <div className="flex justify-center mt-10">
            <p className="text-2xl font-bold">No diamond data available for the selected date.</p>
          </div>
        ) : (
          <div>
            <Table className="mt-6" aria-label="Diamond Purchase Data Table">
              <TableHeader>
                <TableColumn>Diamond Type</TableColumn>
                <TableColumn>Total Diamonds</TableColumn>
                <TableColumn>Diamonds Sold</TableColumn>
                <TableColumn>Available Diamonds</TableColumn>
              </TableHeader>
              <TableBody>
                {diamondData.map((diamond) => (
                  <TableRow key={diamond.id}>
                    <TableCell>{diamond.name}</TableCell>
                    <TableCell>{diamond.totalDiamonds}</TableCell>
                    <TableCell>{diamond.diamondsSold}</TableCell>
                    <TableCell>{diamond.availableDiamonds}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-6">
              <p className="text-lg font-semibold">
                Total Diamonds Sold:{" "}
                {diamondData.reduce((sum, diamond) => sum + diamond.diamondsSold, 0)}
              </p>
              <p className="text-lg font-semibold">
                Total Diamonds Available:{" "}
                {diamondData.reduce((sum, diamond) => sum + diamond.availableDiamonds, 0)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
