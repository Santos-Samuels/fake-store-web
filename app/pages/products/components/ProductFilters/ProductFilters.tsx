import { Search } from "lucide-react";
import { Chip } from "~/components/ui/Chip/Chip";
import { Input } from "~/components/ui/Input/Input";
import { ProductCategoryTypes } from "~/shared/interfaces";
import { styles } from "./styles";

interface ProductFiltersProps {
  categories: ProductCategoryTypes[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isLoading?: boolean;
}

export const ProductFilters = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
  isLoading
}: ProductFiltersProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.title}>Search</h2>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} size={18} />
          <Input 
            placeholder="Find products..." 
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Categories</h2>
        <div className={styles.categoryList}>
          <Chip
            label="All"
            active={selectedCategory === "all"}
            onClick={() => onSelectCategory("all")}
            disabled={isLoading}
            className="capitalize"
          />
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              active={selectedCategory === cat}
              onClick={() => onSelectCategory(cat as string)}
              disabled={isLoading}
              className="capitalize"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
