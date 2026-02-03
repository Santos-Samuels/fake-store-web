import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProductCategoryTypes } from "~/shared/interfaces";
import { ProductFilters } from "./ProductFilters";

const categories: ProductCategoryTypes[] = [
  "electronics",
  "jewelery",
  "men's clothing",
];

describe("ProductFilters", () => {
  it("renders search and categories", () => {
    render(
      <ProductFilters
        categories={categories}
        selectedCategory="all"
        onSelectCategory={() => {}}
        searchTerm=""
        onSearchChange={() => {}}
      />,
    );

    expect(screen.getByPlaceholderText("Find products...")).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("electronics")).toBeInTheDocument();
  });

  it("calls onSearchChange when typing", () => {
    const onSearchChange = vi.fn();
    render(
      <ProductFilters
        categories={categories}
        selectedCategory="all"
        onSelectCategory={() => {}}
        searchTerm=""
        onSearchChange={onSearchChange}
      />,
    );

    const input = screen.getByPlaceholderText("Find products...");
    fireEvent.change(input, { target: { value: "test" } });
    expect(onSearchChange).toHaveBeenCalledWith("test");
  });

  it("calls onSelectCategory when clicking a category", () => {
    const onSelectCategory = vi.fn();
    render(
      <ProductFilters
        categories={categories}
        selectedCategory="all"
        onSelectCategory={onSelectCategory}
        searchTerm=""
        onSearchChange={() => {}}
      />,
    );

    fireEvent.click(screen.getByText("electronics"));
    expect(onSelectCategory).toHaveBeenCalledWith("electronics");
  });

  it("calls onSelectCategory with 'all' when clicking All chip", () => {
    const onSelectCategory = vi.fn();
    render(
      <ProductFilters
        categories={categories}
        selectedCategory="electronics"
        onSelectCategory={onSelectCategory}
        searchTerm=""
        onSearchChange={() => {}}
      />,
    );

    fireEvent.click(screen.getByText("All"));
    expect(onSelectCategory).toHaveBeenCalledWith("all");
  });
});
