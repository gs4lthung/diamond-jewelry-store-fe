import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalViewProduct({ params }: { params: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const diamondData = {
    id: params,
    name: "Round Brilliant Diamond",
    price: "$5000",
    carat: "1.0",
    clarity: "VVS1",
    description: "A beautiful round brilliant-cut diamond.",
  };

  return (
    <>
      <Button onClick={onOpen} className="bg-gray-300 text-black">
        View
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Diamond Details</ModalHeader>
          <ModalBody>
            <p>
              <strong>Name:</strong> {diamondData.name}
            </p>
            <p>
              <strong>Price:</strong> {diamondData.price}
            </p>
            <p>
              <strong>Carat:</strong> {diamondData.carat}
            </p>
            <p>
              <strong>Clarity:</strong> {diamondData.clarity}
            </p>
            <p>
              <strong>Description:</strong> {diamondData.description}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
