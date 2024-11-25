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

export default function ModalUpdateProduct({
  params,
  refetchData,
}: {
  params: any;
  refetchData: () => void;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [diamondData, setDiamondData] = useState(params);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setDiamondData((prev:any) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Updated diamond:", diamondData);
      setIsLoading(false);
      refetchData();
      onClose();
    }, 1500);
  };

  return (
    <>
      <Button onClick={onOpen} className="bg-yellow-500 text-white">
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Update Diamond</ModalHeader>
          <ModalBody>
            <Input
              label="Name"
              value={diamondData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <Input
              label="Price"
              value={diamondData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
            <Input
              label="Carat"
              value={diamondData.carat}
              onChange={(e) => handleInputChange("carat", e.target.value)}
            />
            <Input
              label="Clarity"
              value={diamondData.clarity}
              onChange={(e) => handleInputChange("clarity", e.target.value)}
            />
            <Input
              label="Description"
              value={diamondData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleUpdate} disabled={isLoading}>
              {isLoading ? <Spinner /> : "Update"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
