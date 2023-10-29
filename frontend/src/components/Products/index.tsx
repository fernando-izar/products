import { useState } from "react";
import useListProducts from "../../hooks/useListProducts";
import { Card, Table, Tooltip, Button } from "antd";
import { FaPlus } from "react-icons/fa";
import { AddProductModal } from "../AddProductModal";
import { IProduct } from "../../hooks/useListProducts";

export const Products = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const { data, isFetching } = useListProducts("");
  const columns = [
    {
      dataIndex: "name",
      key: "name",
      title: "Name",
      sorter: (a: IProduct, b: IProduct) => a.name.localeCompare(b.name),
      filters: data?.map((product: IProduct) => ({
        text: product.name,
        value: product.name,
      })),
      onFilter: (value: string, record: IProduct) =>
        record.name.indexOf(value) === 0,
    },
    {
      dataIndex: "description",
      key: "description",
      title: "Description",
      sorter: (a: IProduct, b: IProduct) =>
        a.description.localeCompare(b.description),
    },
    {
      dataIndex: "color",
      key: "color",
      title: "Color",
      sorter: (a: IProduct, b: IProduct) => a.color.localeCompare(b.color),
    },
    {
      dataIndex: "product_category_name",
      key: "product_category_name",
      title: "Product Type",
      sorter: (a: IProduct, b: IProduct) =>
        a.product_category_name.localeCompare(b.product_category_name),
      filters: data?.map((product: IProduct) => ({
        text: product.product_category_name,
        value: product.product_category_name,
      })),
      onFilter: (value: string, record: IProduct) => {
        return record.product_category_name.indexOf(value) === 0;
      },
    },
    {
      dataIndex: "price",
      key: "price",
      title: "Price",
      sorter: (a: IProduct, b: IProduct) => a.price - b.price,
    },
    {
      dataIndex: "promotional_price",
      key: "promotional_price",
      title: "Promotional Price",
      sorter: (a: IProduct, b: IProduct) =>
        a.promotional_price - b.promotional_price,
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
