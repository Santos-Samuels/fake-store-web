import { Product, ProductCategoryTypes, ProductListParams } from "~/shared/interfaces";
import api from "./api";

const ProductServices = {
  list: async ({ limit, sort }: ProductListParams) => {
    return await api.get<Product[]>("/products", {
      params: {
        limit,
        sort,
      },
    });
  },

  getById: async (id: number) => {
    return await api.get<Product>(`/products/${id}`);
  },

  getByCategory: async (category: ProductCategoryTypes) => {
    return await api.get<Product[]>(`/products/category/${category}`);
  },

  listCategories: async () => {
    return await api.get<ProductCategoryTypes[]>("/products/categories");
  },
};

export default ProductServices;
