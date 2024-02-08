import { Layout } from "antd";
import { Header, Footer, Content } from "antd/lib/layout/layout";
import { Products } from "../Products";
import "./style.css";

export const ProductsList = () => {
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <Content className="app-header-content">React-test</Content>
      </Header>
      <Layout>
        <Content className="content-layout">
          <Products />
        </Content>
      </Layout>
      <Footer className="app-footer">
        <Content className="app-footer-content">
          by Fernando Cristante Izar
        </Content>
      </Footer>
    </Layout>
  );
};
