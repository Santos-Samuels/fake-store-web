import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetailsState } from "./types";

const initialState: ProductDetailsState = {
  product: undefined,
  isLoading: false,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductDetailsState(state, action: PayloadAction<Partial<ProductDetailsState>>) {
      Object.assign(state, action.payload);
    },
    clearProductDetails(state) {
      state.product = undefined;
      state.isLoading = false;
    }
  },
});

export const { setProductDetailsState, clearProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
