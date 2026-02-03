import productDetailsReducer, {
  setProductDetailsState,
  clearProductDetails,
} from "./productDetailsSlice";
import { Product } from "~/shared/interfaces";
import { describe, it, expect } from "vitest";

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 100,
  description: "Desc",
  category: "cat",
  image: "img",
  rating: { rate: 5, count: 10 },
};

describe("productDetailsSlice", () => {
  const initialState = {
    product: undefined,
    isLoading: false,
  };

  it("should handle initial state", () => {
    expect(productDetailsReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setProductDetailsState", () => {
    const state = productDetailsReducer(
      initialState,
      setProductDetailsState({ isLoading: true, product: mockProduct })
    );
    expect(state.isLoading).toBe(true);
    expect(state.product).toEqual(mockProduct);
  });

  it("should handle clearProductDetails", () => {
    const stateWithData = {
      product: mockProduct,
      isLoading: true,
    };
    const state = productDetailsReducer(stateWithData, clearProductDetails());
    expect(state.product).toBeUndefined();
    expect(state.isLoading).toBe(false);
  });
});
