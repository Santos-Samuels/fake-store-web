import { Product } from "~/shared/interfaces";
import { ProductItem } from "../ProductItem/ProductItem";
import { styles } from "./styles";

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
}

export const ProductList = ({ products, isLoading }: ProductListProps) => {
  if (isLoading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, i) => (
           <div key={i} className={styles.skeleton} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
