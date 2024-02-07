import React from "react";
import { Modal, Input } from "antd";

const { Search } = Input;

type FilterProductModalProps = {
  setShowFilterProductModal: (show: boolean) => void;
  onSearch: (value: string) => void;
  setQuery: (query: string) => void;
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>;
  searchedValue: string;
};

export const FilterProductModal: React.FC<FilterProductModalProps> = ({
  setShowFilterProductModal,
  onSearch,
  setQuery,
  setSearchedValue,
  searchedValue,
}) => {
  const handleOK = () => {
    setQuery("");
    setShowFilterProductModal(false);
    setSearchedValue("");
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
      <Search
        placeholder="Search"
        value={searchedValue}
        onSearch={onSearch}
        onChange={(e) => setSearchedValue(e.target.value)}
      />
    </Modal>
  );
};
