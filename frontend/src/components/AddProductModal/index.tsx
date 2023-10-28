import React from "react";
import { Modal, Row, Col, Input, Select } from "antd";
import { Formik } from "formik";

type AddProductModalProps = {
  setShowAddProductModal: (show: boolean) => void;
};

const initialValues = {
  name: "",
  description: "",
  color: "",
  product_category: "",
  price: 0,
};

export const AddProductModal: React.FC<AddProductModalProps> = ({
  setShowAddProductModal,
}) => {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Modal
      visible={true}
      title="Add Product"
      onCancel={() => {
        setShowAddProductModal(false);
      }}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleSubmit, handleChange, isSubmitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Name"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                  />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Description"
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                  />
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Color"
                    value={values.color}
                    name="color"
                    onChange={handleChange}
                  />
                </Col>
                <Col span={24}>
                  <Select />
                </Col>
                <Col span={24}>
                  <Input
                    type="number"
                    placeholder="Price"
                    value={values.price}
                    name="price"
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                  />
                </Col>
                <Col span={24}>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Col>
              </Row>
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
};
