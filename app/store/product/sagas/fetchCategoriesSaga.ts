import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { ProductServices } from "~/services";
import { ProductCategoryTypes } from "~/shared/interfaces";
import { setProductsState } from "../productList/productListSlice";

export function* fetchCategoriesSaga() {
  try {
    yield put(setProductsState({ isCategoriesLoading: true }));
    const response: { data: ProductCategoryTypes[] } = yield call(
      ProductServices.listCategories,
    );
    yield put(
      setProductsState({
        categories: response.data,
        isCategoriesLoading: false,
      }),
    );
  } catch (error) {
    yield put(setProductsState({ isCategoriesLoading: false }));
    toast.error("Falha ao carregar categorias.");
  }
}
