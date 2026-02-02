import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store";
import {
  fetchCategories,
  fetchProducts,
  selectFilteredProducts,
  setSearchTerm,
} from "~/store/product/productList/productListSlice";
import { ProductFilters } from "./components/ProductFilters/ProductFilters";
import { ProductList } from "./components/ProductList/ProductList";

const ProductListPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, categories, isCategoriesLoading, filters } = useSelector(
    (state: RootState) => state.products,
  );
  const filteredItems = useSelector(selectFilteredProducts);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [localSearchTerm, setLocalSearchTerm] = useState(filters?.title || "");

  useEffect(() => {
    setLocalSearchTerm(filters?.title || "");
  }, [filters?.title]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts({ category: selectedCategory }));
  }, [dispatch, selectedCategory]);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchTerm(localSearchTerm));
    }, 500);

    return () => clearTimeout(timer);
  }, [localSearchTerm, dispatch]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (term: string) => {
    setLocalSearchTerm(term);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Our Products</h1>

      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        searchTerm={localSearchTerm}
        onSearchChange={handleSearchChange}
        isLoading={isCategoriesLoading || isLoading}
      />

      <ProductList products={filteredItems} isLoading={isLoading} />
    </div>
  );
};

export default ProductListPage;
