'use client';

import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { DiamondPriceDetail } from '@/models/shopModel';

interface ModalViewDiamondDetailProps {
  diamond: DiamondPriceDetail; // Diamond details to display
  isOpen: boolean;
  onClose: () => void;
}

const ModalViewDiamondDetail: React.FC<ModalViewDiamondDetailProps> = ({
  diamond,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" backdrop="blur">
      <ModalContent>
        <ModalHeader className="text-lg font-semibold">
          Diamond Price Details
        </ModalHeader>
        <ModalBody>
          <Table aria-label="Diamond Details Table">
            <TableHeader>
              <TableColumn>Property</TableColumn>
              <TableColumn>Value</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Origin</TableCell>
                <TableCell>{diamond.Origin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Carat Weight (From)</TableCell>
                <TableCell>{diamond.Ct_Weight_From}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Carat Weight (To)</TableCell>
                <TableCell>{diamond.Ct_Weight_To}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Color</TableCell>
                <TableCell>{diamond.Color}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Clarity</TableCell>
                <TableCell>{diamond.Clarity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cut</TableCell>
                <TableCell>{diamond.Cut}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Price</TableCell>
                <TableCell>{`$${diamond.Price.toLocaleString()}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Effective Date</TableCell>
                <TableCell>{new Date(diamond.Eff_date).toLocaleDateString()}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} className="bg-gray-500 hover:bg-gray-600">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalViewDiamondDetail;
