import { Modal } from "antd";

export const ConfirmDeleteProductModal = (
  product_name: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    Modal.confirm({
      title: `Are you sure you want to delete product "${product_name}"?`,
      content: "This action cannot be undone.",
      cancelText: "Cancel",
      onCancel: () => resolve(false),
      okText: "Delete",
      onOk: () => resolve(true),
    });
  });
};
