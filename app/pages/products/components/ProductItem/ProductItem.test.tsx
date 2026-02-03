import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "~/test-utils";
import { ProductItem } from "./ProductItem";

const navigate = vi.fn();
vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    useNavigate: () => navigate,
  };
});

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  description: "Test Description",
  category: "electronics",
  image: "test.jpg",
  rating: {
    rate: 4.5,
    count: 10
  }
};

describe("ProductItem", () => {
  it("renders product information correctly", () => {
    renderWithProviders(<ProductItem product={mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
    expect(screen.getByText("electronics")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("adds item to cart when Add button is clicked", async () => {
    const { store } = renderWithProviders(<ProductItem product={mockProduct} />);

    const addButton = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(addButton);

    const state = store.getState();
    expect(state.cart.items).toHaveLength(1);
    expect(state.cart.items[0].id).toBe(1);
    expect(state.cart.isOpen).toBe(true);
  });

  it("navigates to product details when card is clicked", async () => {
    renderWithProviders(<ProductItem product={mockProduct} />);

    const title = screen.getByText("Test Product");
    fireEvent.click(title);

    expect(navigate).toHaveBeenCalledWith("/products/1");
  });
});
