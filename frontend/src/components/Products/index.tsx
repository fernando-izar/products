import { useState } from "react";
import useListProducts from "../../hooks/useListProducts";
import { Card, Table, Tooltip, message } from "antd";
import { FaPlus, FaTrash } from "react-icons/fa";
import { AddProductModal } from "../AddProductModal";
import { IProduct } from "../../hooks/useListProducts";
import { ConfirmDeleteProductModal } from "../ConfirmDeleteProductModal";
import api from "../../services/api";

export const Products = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const { data, refetch, isFetching } = useListProducts("");

  const handleDelete = async (id: number, name: string) => {
    const confirmDelete = await ConfirmDeleteProductModal(name);
    if (confirmDelete) {
      try {
        await api.delete(`api/product/${id}/`);
        message.success("Product deleted successfully");
      } catch (error) {
        message.error("Error deleting product");
      } finally {
        refetch();
      }
    }
  };

  const columns = [
    {
      dataIndex: "name",
      key: "name",
      title: "Name",
      onFilter: (value: string, record: IProduct) =>
        record.name.indexOf(value) === 0,
      sorter: (a: IProduct, b: IProduct) => a.name.localeCompare(b.name),
      filters: data?.map((product: IProduct) => ({
        text: product.name,
        value: product.name,
      })),
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
      onFilter: (value: string, record: IProduct) => {
        return record.product_category_name.indexOf(value) === 0;
      },
      sorter: (a: IProduct, b: IProduct) =>
        a.product_category_name.localeCompare(b.product_category_name),
      filters: data?.map((product: IProduct) => ({
        text: product.product_category_name,
        value: product.product_category_name,
      })),
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
    {
      title: "Action",
      dataIndex: "operation",
      render: (_: unknown, record: IProduct) => {
        const { id, name } = record;
        return (
          <Tooltip title="Delete Product">
            <FaTrash
              size={12}
              onClick={() => handleDelete(id, name)}
              style={{ cursor: "pointer" }}
            ></FaTrash>
          </Tooltip>
        );
      },
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
          ></FaPlus>
        </Tooltip>
      }
    >
      {
        //@ts-ignore
        <Table columns={columns} dataSource={data} loading={isFetching} />
      }
      {showAddProductModal && (
        <AddProductModal
          setShowAddProductModal={setShowAddProductModal}
          refetch={refetch}
        />
      )}
    </Card>
  );
};
