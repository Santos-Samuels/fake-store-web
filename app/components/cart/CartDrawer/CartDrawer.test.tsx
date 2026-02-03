import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "~/test-utils";
import { CartDrawer } from "./CartDrawer";

const mockCartItem = {
  id: 1,
  title: "Test Product",
  price: 100,
  description: "Test Description",
  category: "electronics",
  image: "test.jpg",
  rating: { rate: 4.5, count: 10 },
  quantity: 2
};

describe("CartDrawer", () => {
  it("does not render when closed", () => {
    renderWithProviders(<CartDrawer />, {
      preloadedState: {
        cart: { isOpen: false, items: [] }
      }
    });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders correctly when open with items", () => {
    renderWithProviders(<CartDrawer />, {
      preloadedState: {
        cart: { 
          isOpen: true, 
          items: [mockCartItem] 
        }
      }
    });

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Shopping Cart (2)")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("$200.00")).toBeInTheDocument(); // 2 * 100
  });

  it("shows empty state when no items", () => {
    renderWithProviders(<CartDrawer />, {
      preloadedState: {
        cart: { isOpen: true, items: [] }
      }
    });

    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("closes when close button is clicked", async () => {
    const { store } = renderWithProviders(<CartDrawer />, {
      preloadedState: {
        cart: { isOpen: true, items: [] }
      }
    });

    const closeButton = screen.getByRole("button", { name: /close panel/i });
    fireEvent.click(closeButton);

    const state = store.getState();
    expect(state.cart.isOpen).toBe(false);
  });

  it("increases item quantity", async () => {
    const { store } = renderWithProviders(<CartDrawer />, {
      preloadedState: {
        cart: { 
          isOpen: true, 
          items: [mockCartItem] 
        }
      }
    });

    const increaseButton = screen.getByRole("button", { name: /increase quantity/i });
    fireEvent.click(increaseButton);

    const state = store.getState();
    expect(state.cart.items[0].quantity).toBe(3);
    expect(screen.getByText("$300.00")).toBeInTheDocument();
  });

  it("removes item", async () => {
    const { store } = renderWithProviders(<CartDrawer />, {
      preloadedState: {
        cart: { 
          isOpen: true, 
          items: [mockCartItem] 
        }
      }
    });

    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);

    const state = store.getState();
    expect(state.cart.items).toHaveLength(0);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("closes when pressing Escape key", () => {
    const { store } = renderWithProviders(<CartDrawer />, {
      preloadedState: {
        cart: { isOpen: true, items: [] }
      }
    });

    fireEvent.keyDown(document, { key: "Escape" });
    expect(store.getState().cart.isOpen).toBe(false);
  });

  it("does not close when pressing other keys", () => {
    const { store } = renderWithProviders(<CartDrawer />, {
      preloadedState: {
        cart: { isOpen: true, items: [] }
      }
    });

    fireEvent.keyDown(document, { key: "Enter" });
    expect(store.getState().cart.isOpen).toBe(true);
  });

  it("closes when clicking overlay", () => {
    const { store } = renderWithProviders(<CartDrawer />, {
      preloadedState: {
        cart: { isOpen: true, items: [] }
      }
    });
    const overlay = document.querySelector('[aria-hidden="true"]');
    if (overlay) {
      fireEvent.click(overlay);
      expect(store.getState().cart.isOpen).toBe(false);
    } else {
      throw new Error("Overlay not found");
    }
  });

  it("navigates to checkout when checkout button is clicked", () => {
    const { store } = renderWithProviders(<CartDrawer />, {
      preloadedState: {
        cart: { 
          isOpen: true, 
          items: [mockCartItem] 
        }
      }
    });

    const checkoutButton = screen.getByText(/checkout/i); 
    fireEvent.click(checkoutButton);

    expect(store.getState().cart.isOpen).toBe(false);
  });
});
