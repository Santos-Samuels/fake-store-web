import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "~/shared/interfaces";
import { ProductCartState } from "./types";

const initialState: ProductCartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeCartItem(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateCartItem(state, action: PayloadAction<Product>) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addCartItem, removeCartItem, updateCartItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
