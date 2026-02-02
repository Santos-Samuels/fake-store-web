import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "~/shared/interfaces";
import { ProductCartState } from "./types";

const initialState: ProductCartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    addCartItem(state, action: PayloadAction<Product>) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    decreaseCartItem(state, action: PayloadAction<{ id: number }>) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].quantity > 1) {
          state.items[existingItemIndex].quantity -= 1;
        } else {
          state.items.splice(existingItemIndex, 1);
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  toggleCart,
  openCart,
  closeCart,
  addCartItem,
  removeCartItem,
  decreaseCartItem,
  clearCart,
} = cartSlice.actions;

export const selectCartTotal = (state: { cart: ProductCartState }) => {
  return state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const selectCartItemsCount = (state: { cart: ProductCartState }) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export default cartSlice.reducer;
