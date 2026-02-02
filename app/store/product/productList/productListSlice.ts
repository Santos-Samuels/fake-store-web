import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductListParams } from "~/shared/interfaces";
import { ProductsState } from "./types";

const initialState: ProductsState = {
  isLoading: false,
  isCategoriesLoading: false,
  items: [],
  categories: [],
  filters: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsState(state, action: PayloadAction<Partial<ProductsState>>) {
      Object.assign(state, action.payload);
    },
    fetchProducts(state, action: PayloadAction<ProductListParams | undefined>) {
      // handled by saga
    },
    fetchCategories(state) {
      // handled by saga
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      if (!state.filters) {
        state.filters = { title: "", category: [] };
      }
      state.filters.title = action.payload;
    },
  },
});

export const { setProductsState, fetchProducts, fetchCategories, setSearchTerm } =
  productsSlice.actions;

export const selectFilteredProducts = (state: { products: ProductsState }) => {
  const { items, filters } = state.products;
  const searchTerm = filters?.title?.toLowerCase() || "";
  
  if (!searchTerm) return items;

  return items.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );
};

export default productsSlice.reducer;
