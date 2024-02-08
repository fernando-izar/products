import { Modal } from "antd";

export const ConfirmLogoutModal = (): Promise<boolean> => {
  return new Promise((resolve) => {
    Modal.confirm({
      title: "Confirm logout?",
      // content: "This action cannot be undone.",
      cancelText: "Cancel",
      onCancel: () => resolve(false),
      okText: "Logout",
      onOk: () => resolve(true),
    });
  });
};
