import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./product/productCart/productCartSlice";
import productsReducer from "./product/productList/productListSlice";
import productDetailsReducer from "./product/productDetails/productDetailsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
