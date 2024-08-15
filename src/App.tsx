// src/App.tsx
import { Layout, Menu } from "antd";
import React, { Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { menuItems } from "./config/menu";
import { routes } from "./config/routers";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "white", marginRight: "auto" }}>
          English Assistant
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          onClick={handleMenuClick}
          style={{ flex: 1 }}
        />
      </Header>
      <Content style={{ padding: "50px", minHeight: "calc(100vh - 134px)" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </Content>
      <Footer style={{ textAlign: "center" }}>© anhvhht.1997 2024</Footer>
    </Layout>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
