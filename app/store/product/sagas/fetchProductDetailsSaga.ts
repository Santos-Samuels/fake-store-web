import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { ProductServices } from "~/services";
import { Product } from "~/shared/interfaces";
import { setProductDetailsState } from "../productDetails/productDetailsSlice";

export function* fetchProductDetailsSaga(action: PayloadAction<number>) {
  try {
    yield put(setProductDetailsState({ isLoading: true }));
    const response: { data: Product } = yield call(
      ProductServices.getById,
      action.payload,
    );
    yield put(
      setProductDetailsState({
        product: response.data,
        isLoading: false,
      }),
    );
  } catch (error) {
    yield put(
      setProductDetailsState({
        isLoading: false,
      }),
    );
    toast.error("Falha ao carregar produto.");
  }
}
