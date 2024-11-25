import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalCreateDiamond() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [diamondData, setDiamondData] = useState({
    name: "",
    price: "",
    carat: "",
    clarity: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setDiamondData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreate = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Created diamond:", diamondData);
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <>
      <Button onClick={onOpen} className="bg-blue-500 text-white">
        Add New Diamond
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Create New Diamond</ModalHeader>
          <ModalBody>
            <Input
              label="Name"
              placeholder="Enter diamond name"
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <Input
              label="Price"
              placeholder="Enter diamond price"
              type="number"
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
            <Input
              label="Carat"
              placeholder="Enter carat weight"
              type="number"
              onChange={(e) => handleInputChange("carat", e.target.value)}
            />
            <Input
              label="Clarity"
              placeholder="Enter clarity grade"
              onChange={(e) => handleInputChange("clarity", e.target.value)}
            />
            <Input
              label="Description"
              placeholder="Enter description"
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleCreate} disabled={isLoading}>
              {isLoading ? <Spinner /> : "Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
