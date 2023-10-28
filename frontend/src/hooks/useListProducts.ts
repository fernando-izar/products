import { useQuery, UseQueryResult } from "react-query";
import { notification } from "antd";
import api from "../services/api";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  color: string;
  price: number;
  product_category: number;
  promotional_price: number;
}

const getListProducts = async (): Promise<IProduct[]> => {
  try {
    const { data } = await api.get("/api/products");
    return data;
  } catch (error) {
    notification.error({ message: "Erro ao buscar produtos" });
    return [];
  }
};

export default function useListProducts(
  query?: string
): UseQueryResult<IProduct[]> {
  return useQuery(["products", query], getListProducts);
}
