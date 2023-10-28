import React from "react";
import { Modal } from "antd";

type AddProductModalProps = {
  setShowAddProductModal: (show: boolean) => void;
};

export const AddProductModal: React.FC<AddProductModalProps> = ({
  setShowAddProductModal,
}) => {
  return (
    <Modal
      visible={true}
      title="Add Product"
      onOk={() => {}}
      onCancel={() => {
        setShowAddProductModal(false);
      }}
    >
      <p>Some contents...</p>
    </Modal>
  );
};
