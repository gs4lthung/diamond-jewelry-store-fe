import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalDeleteDiamond({
  params,
  refetchData,
}: {
  params: string;
  refetchData: () => void;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Deleted diamond with ID:", params);
      setIsLoading(false);
      refetchData();
      onClose();
    }, 1500);
  };

  return (
    <>
      <Button onClick={onOpen} className="bg-red-500 text-white">
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Delete Diamond</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete this diamond?</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleDelete} disabled={isLoading}>
              {isLoading ? <Spinner /> : "Delete"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
