import { useState } from "react";
import useListProducts from "../../hooks/useListProducts";
import useListProductCategories from "../../hooks/useListProductCategories";
import { Card, Table, Tooltip, Button } from "antd";
import { FaPlus } from "react-icons/fa";
import { AddProductModal } from "../AddProductModal";

export const Products = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const { data, isFetching } = useListProducts("");
  const { data: productCategories } = useListProductCategories("");
  console.log("productCategories", productCategories);
  const columns = [
    {
      dataIndex: "name",
      key: "name",
      title: "Name",
      sorter: true,
    },
    {
      dataIndex: "description",
      key: "description",
      title: "Description",
      sorter: true,
    },
    {
      dataIndex: "color",
      key: "color",
      title: "Color",
      sorter: true,
    },
    {
      dataIndex: "product_category_name",
      key: "product_category_name",
      title: "Product Type",
      sorter: true,
    },
    {
      dataIndex: "price",
      key: "price",
      title: "Price",
      sorter: true,
    },
    {
      dataIndex: "promotional_price",
      key: "promotional_price",
      title: "Promotional Price",
      sorter: true,
    },
  ];
  return (
    <Card
      type="inner"
      title="Products List"
      extra={
        <Tooltip title="Add Product">
          <FaPlus
            style={{ cursor: "pointer" }}
            onClick={() => setShowAddProductModal(true)}
          >
            // <Button onClick={() => setShowAddProductModal(true)} />
          </FaPlus>
        </Tooltip>
      }
    >
      <Table columns={columns} dataSource={data} loading={isFetching} />
      {showAddProductModal && (
        <AddProductModal setShowAddProductModal={setShowAddProductModal} />
      )}
    </Card>
  );
};
