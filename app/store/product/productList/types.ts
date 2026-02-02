import { Product, ProductCategoryTypes, ProductFilterParams } from "~/shared/interfaces";

export interface ProductsState {
  isLoading: boolean;
  isCategoriesLoading: boolean;
  items: Product[];
  categories: ProductCategoryTypes[];
  filters?: ProductFilterParams;
}
