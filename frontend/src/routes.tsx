import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsList } from "./components/ProductsList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsList />} />
      <Route path="*" element={<Navigate to="/products" />} />
    </Routes>
  );
};
