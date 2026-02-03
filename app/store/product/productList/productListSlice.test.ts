import productListReducer, {
  setProductsState,
  setSearchTerm,
  selectFilteredProducts,
} from "./productListSlice";
import { Product } from "~/shared/interfaces";
import { describe, it, expect } from "vitest";

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Test Product One",
    price: 100,
    description: "Desc",
    category: "cat",
    image: "img",
    rating: { rate: 5, count: 10 },
  },
  {
    id: 2,
    title: "Second Item",
    price: 50,
    description: "Desc",
    category: "cat",
    image: "img",
    rating: { rate: 4, count: 5 },
  },
];

describe("productListSlice", () => {
  const initialState = {
    isLoading: false,
    isCategoriesLoading: false,
    items: [],
    categories: [],
    filters: undefined,
  };

  it("should handle initial state", () => {
    expect(productListReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setProductsState", () => {
    const state = productListReducer(
      initialState,
      setProductsState({ isLoading: true, items: mockProducts })
    );
    expect(state.isLoading).toBe(true);
    expect(state.items).toHaveLength(2);
  });

  it("should handle setSearchTerm", () => {
    let state = productListReducer(initialState, setSearchTerm("test"));
    expect(state.filters?.title).toBe("test");

    // Test updating existing filters
    state = productListReducer(state, setSearchTerm("updated"));
    expect(state.filters?.title).toBe("updated");
  });

  describe("selectors", () => {
    const state = {
      products: {
        ...initialState,
        items: mockProducts,
      },
    };

    it("should return all products when no search term", () => {
      expect(selectFilteredProducts(state)).toHaveLength(2);
    });

    it("should filter products by title (case insensitive)", () => {
      const stateWithFilter = {
        products: {
          ...state.products,
          filters: { title: "one", category: [] },
        },
      };
      const result = selectFilteredProducts(stateWithFilter);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(1);
    });

    it("should return empty array when no match", () => {
      const stateWithFilter = {
        products: {
          ...state.products,
          filters: { title: "xyz", category: [] },
        },
      };
      const result = selectFilteredProducts(stateWithFilter);
      expect(result).toHaveLength(0);
    });
  });
});
