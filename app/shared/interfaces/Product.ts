export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
  quantity?: number;
  oldPrice?: number;
}

export interface ProductFilterParams {
  title: string;
  category: string[];
}

export interface ProductRating {
  rate: number;
  count: number;
}

export type ProductCategoryTypes =
  | "all"
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

type sortTypes = "asc" | "desc";

export interface ProductListParams {
  limit?: number;
  sort?: sortTypes;
}

export interface CategoriesWithIconType {
  name: ProductCategoryTypes;
  icon: string;
}
