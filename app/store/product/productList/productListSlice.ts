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
  },
});

export const { setProductsState, fetchProducts, fetchCategories } =
  productsSlice.actions;
export default productsSlice.reducer;
