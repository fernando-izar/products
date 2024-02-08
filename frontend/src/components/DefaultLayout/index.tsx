import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Layout } from "antd";
import { Header, Footer, Content } from "antd/lib/layout/layout";
import { AuthContext } from "../AuthProvider";
import "./style.css";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { logout } = useContext(AuthContext);
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <Content className="app-header-content">Products App</Content>
        <FaSignOutAlt onClick={() => logout()} className="sign-out-icon" />
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
