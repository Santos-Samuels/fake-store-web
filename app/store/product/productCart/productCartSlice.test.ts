import productCartReducer, {
  toggleCart,
  openCart,
  closeCart,
  addCartItem,
  removeCartItem,
  decreaseCartItem,
  clearCart,
  selectCartTotal,
  selectCartItemsCount,
} from "./productCartSlice";
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

describe("productCartSlice", () => {
  const initialState = {
    items: [],
    isOpen: false,
  };

  it("should handle initial state", () => {
    expect(productCartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle toggleCart", () => {
    let state = productCartReducer(initialState, toggleCart());
    expect(state.isOpen).toBe(true);
    state = productCartReducer(state, toggleCart());
    expect(state.isOpen).toBe(false);
  });

  it("should handle openCart", () => {
    const state = productCartReducer(initialState, openCart());
    expect(state.isOpen).toBe(true);
  });

  it("should handle closeCart", () => {
    const openState = { ...initialState, isOpen: true };
    const state = productCartReducer(openState, closeCart());
    expect(state.isOpen).toBe(false);
  });

  it("should handle addCartItem (new item)", () => {
    const state = productCartReducer(initialState, addCartItem(mockProduct));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(1);
    expect(state.items[0].id).toBe(mockProduct.id);
  });

  it("should handle addCartItem (existing item)", () => {
    const stateWithItem = {
      ...initialState,
      items: [{ ...mockProduct, quantity: 1 }],
    };
    const state = productCartReducer(stateWithItem, addCartItem(mockProduct));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(2);
  });

  it("should handle removeCartItem", () => {
    const stateWithItem = {
      ...initialState,
      items: [{ ...mockProduct, quantity: 1 }],
    };
    const state = productCartReducer(stateWithItem, removeCartItem({ id: mockProduct.id }));
    expect(state.items).toHaveLength(0);
  });

  it("should handle decreaseCartItem (quantity > 1)", () => {
    const stateWithItem = {
      ...initialState,
      items: [{ ...mockProduct, quantity: 2 }],
    };
    const state = productCartReducer(stateWithItem, decreaseCartItem({ id: mockProduct.id }));
    expect(state.items[0].quantity).toBe(1);
  });

  it("should handle decreaseCartItem (quantity = 1)", () => {
    const stateWithItem = {
      ...initialState,
      items: [{ ...mockProduct, quantity: 1 }],
    };
    const state = productCartReducer(stateWithItem, decreaseCartItem({ id: mockProduct.id }));
    expect(state.items).toHaveLength(0);
  });

  it("should handle clearCart", () => {
    const stateWithItem = {
      ...initialState,
      items: [{ ...mockProduct, quantity: 2 }],
    };
    const state = productCartReducer(stateWithItem, clearCart());
    expect(state.items).toHaveLength(0);
  });

  describe("selectors", () => {
    const state = {
      cart: {
        items: [
          { ...mockProduct, price: 100, quantity: 2 },
          { ...mockProduct, id: 2, price: 50, quantity: 1 },
        ],
        isOpen: false,
      },
    };

    it("should calculate total correctly", () => {
      expect(selectCartTotal(state)).toBe(250); // 100*2 + 50*1
    });

    it("should calculate items count correctly", () => {
      expect(selectCartItemsCount(state)).toBe(3); // 2 + 1
    });
  });
});
