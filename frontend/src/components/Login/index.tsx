import React, { useContext } from "react";
import { Row, Col, Input, Button, message, Space, Card } from "antd";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../AuthProvider";
import { SignInRequestData } from "../AuthProvider";
import { useNavigate } from "react-router-dom";

const InitialValues = {
  username: "",
  email: "",
  password: "",
};

export const Login: React.FC = () => {
  const { signIn, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values: SignInRequestData) => {
    try {
      await signIn(values);
      setIsAuthenticated(true);
      navigate("/products");
      message.success("Logged in successfully");
    } catch (error) {
      console.log("error", error);
      message.error("Invalid credentials");
    }
  };

  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Card>
            <Space direction="vertical" size={30}>
              <Row>
                <Col span={24}>
                  <Input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error-message"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </Col>
              </Row>
              <Row justify={"center"}>
                <Col span={12}>
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </Col>
              </Row>
            </Space>
          </Card>
        </form>
      )}
    </Formik>
  );
};
