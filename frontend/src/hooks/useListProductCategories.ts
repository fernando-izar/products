import { useQuery, UseQueryResult } from "react-query";
import { notification } from "antd";
import api from "../services/api";

export interface IProductCategories {
  id: number;
  name: string;
  discount: number;
}

const getListProductCategories = async (): Promise<IProductCategories[]> => {
  try {
    const { data } = await api.get("/api/product_categories");
    return data;
  } catch (error) {
    notification.error({ message: "Erro ao buscar produtos" });
    return [];
  }
};

export default function useListProductCategories(
  query?: string
): UseQueryResult<IProductCategories[]> {
  return useQuery(["product-categories", query], getListProductCategories);
}
