import { Heart, Share2, ShoppingCart } from "lucide-react";
import { Button } from "~/components/ui/Button/Button";
import { styles } from "./styles";

interface ProductActionsProps {
  onAddToCart: () => void;
}

export const ProductActions = ({ onAddToCart }: ProductActionsProps) => {
  return (
    <div className={styles.container}>
      <Button
        size="lg"
        className={styles.addToCartButton}
        onClick={onAddToCart}
      >
        <ShoppingCart className={styles.icon} />
        Add to Cart
      </Button>
      <Button
        size="lg"
        variant="outline"
        className={styles.iconButton}
      >
        <Heart className={styles.icon} />
      </Button>
      <Button
        size="lg"
        variant="ghost"
        className={styles.iconButton}
      >
        <Share2 className={styles.icon} />
      </Button>
    </div>
  );
};
