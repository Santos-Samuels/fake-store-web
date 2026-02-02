import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { ProductServices } from "~/services";
import { Product, ProductListParams } from "~/shared/interfaces";
import { setProductsState } from "../productList/productListSlice";

export function* fetchProductsSaga(
  action: PayloadAction<ProductListParams | undefined>,
) {
  try {
    yield put(setProductsState({ isLoading: true }));
    
    const params = action.payload || {};
    let response: { data: Product[] };

    if (params.category && params.category !== "all") {
      response = yield call(
        ProductServices.getByCategory,
        params.category as any,
      );
    } else {
      response = yield call(ProductServices.list, params);
    }

    yield put(setProductsState({ items: response.data, isLoading: false }));
  } catch (error) {
    yield put(setProductsState({ isLoading: false }));
    toast.error("Falha ao carregar produtos.");
  }
}
