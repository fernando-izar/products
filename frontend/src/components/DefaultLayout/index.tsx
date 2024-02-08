import { Layout } from "antd";
import { Header, Footer, Content } from "antd/lib/layout/layout";
import "./style.css";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <Content className="app-header-content">Products App</Content>
      </Header>
      <Layout>
        <Content className="content-layout">{children}</Content>
      </Layout>
      <Footer className="app-footer">
        <Content className="app-footer-content">
          by Fernando Cristante Izar
        </Content>
      </Footer>
    </Layout>
  );
};
