import { takeLatest } from "redux-saga/effects";
import { fetchProductDetails } from "../productDetails/productDetailsSlice";
import {
  fetchCategories,
  fetchProducts,
} from "../productList/productListSlice";
import { fetchCategoriesSaga } from "./fetchCategoriesSaga";
import { fetchProductDetailsSaga } from "./fetchProductDetailsSaga";
import { fetchProductsSaga } from "./fetchProductsSaga";

export function* productSagas() {
  yield takeLatest(fetchProducts.type, fetchProductsSaga);
  yield takeLatest(fetchCategories.type, fetchCategoriesSaga);
  yield takeLatest(fetchProductDetails.type, fetchProductDetailsSaga);
}
