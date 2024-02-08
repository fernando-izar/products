import React, { useState, useEffect } from "react";
import useListProductCategories from "../../hooks/useListProductCategories";
import { Modal, Row, Col, Input, Select, message } from "antd";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import useListProduct from "../../hooks/useListProduct";

type EditProductModalProps = {
  setShowAddProductModal: (show: boolean) => void;
  refetch: () => void;
  id: number;
};

type ProductFormValues = {
  name: string;
  description: string;
  color: string;
  product_category: number | null;
  price: number | undefined;
};

export const EditProductModal: React.FC<EditProductModalProps> = ({
  setShowAddProductModal,
  refetch,
  id,
}) => {
  const { data } = useListProductCategories("");
  const { data: product, isLoading } = useListProduct(id);

  const [initialValues, setInitialValues] = useState<ProductFormValues>({
    name: "",
    description: "",
    color: "",
    product_category: null,
    price: undefined,
  });

  const productSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    color: Yup.string().required("Required"),
    product_category: Yup.string().required("Required"),
    price: Yup.number()
      .required("Required")
      .min(0.01, "Must be greater than 0.01"),
  });

  async function handleSubmit(values: ProductFormValues) {
    try {
      await api.put(`api/product/${id}/`, values);
      message.success("Product updated successfully");
    } catch (error) {
      message.error("Error creating product");
    } finally {
      setShowAddProductModal(false);
      refetch();
    }
  }

  useEffect(() => {
    if (product && !isLoading) {
      setInitialValues({
        name: product.name || "",
        description: product.description || "",
        color: product.color || "",
        product_category: product.product_category || null,
        price: product.price || undefined,
      });
    }
  }, [product, isLoading]);

  return (
    <Modal
      open={true}
      title="Edit Product"
      onCancel={() => {
        setShowAddProductModal(false);
      }}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={productSchema}
        enableReinitialize
      >
        {({
          values,
          handleSubmit,
          handleChange,
          isSubmitting,
          setFieldValue,
        }) => {
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
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
                <Col span={24}>
                  <Input
                    type="text"
                    placeholder="Description"
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="error-message"
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
                  <ErrorMessage
                    name="color"
                    component="div"
                    className="error-message"
                  />
                </Col>
                <Col span={24}>
                  <Select
                    placeholder="Product Type"
                    onChange={(value) =>
                      setFieldValue("product_category", value)
                    }
                    value={values.product_category}
                    style={{ width: "100%" }}
                    options={data?.map((category) => ({
                      label: category.name,
                      value: category.id,
                    }))}
                  />
                  <ErrorMessage
                    name="product_category"
                    component="div"
                    className="error-message"
                  />
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
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="error-message"
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
