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
    },
    fetchProductDetails: (_state, _action: PayloadAction<number>) => {}, // handled by saga
  },
});

export const { setProductDetailsState, clearProductDetails, fetchProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
