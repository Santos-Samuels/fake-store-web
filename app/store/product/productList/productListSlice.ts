import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  },
});

export const { setProductsState } = productsSlice.actions;
export default productsSlice.reducer;
