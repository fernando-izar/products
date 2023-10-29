import React from "react";
import { Modal, Input } from "antd";

type FilterProductModalProps = {
  setShowFilterProductModal: (show: boolean) => void;
  onSearch: (value: string) => void;
  setQuery: (query: string) => void;
};

export const FilterProductModal: React.FC<FilterProductModalProps> = ({
  setShowFilterProductModal,
  onSearch,
  setQuery,
}) => {
  const handleOK = () => {
    setQuery("");
    setShowFilterProductModal(false);
  };

  return (
    <Modal
      open={true}
      title="Filter Products"
      onCancel={() => setShowFilterProductModal(false)}
      cancelButtonProps={{ style: { display: "none" } }}
      onOk={handleOK}
      okText="Reset"
    >
      <Input.Search placeholder="Search by name" onSearch={onSearch} />
    </Modal>
  );
};
