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
  product_category_name: string;
  promotional_price: number;
}

const getListProducts = async (query: string): Promise<IProduct[]> => {
  try {
    const { data } = await api.get(`/api/products${query}`);
    return data;
  } catch (error) {
    notification.error({ message: "Erro ao buscar produtos" });
    return [];
  }
};

export default function useListProducts(
  query = ""
): UseQueryResult<IProduct[]> {
  return useQuery(["products", query], () => getListProducts(query));
}
