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

const getListProduct = async (id: number | string): Promise<IProduct[]> => {
  try {
    const { data } = await api.get(`/api/product/${id}/`);
    return data;
  } catch (error) {
    notification.error({ message: "Erro ao buscar produtos" });
    return [];
  }
};

export default function useListProduct(id: number): UseQueryResult<IProduct> {
  return useQuery(["products", id], ({ queryKey: [_, id] }) =>
    getListProduct(id)
  );
}
