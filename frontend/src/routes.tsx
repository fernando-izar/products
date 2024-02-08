import { Navigate, Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import { Login } from "./components/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
