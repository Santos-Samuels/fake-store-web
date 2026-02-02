import { ShoppingCart, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Badge } from "~/components/ui/Badge/Badge";
import { Button } from "~/components/ui/Button/Button";
import { getProductOldPrice } from "~/shared/helpers";
import { Product } from "~/shared/interfaces";
import { addCartItem, openCart } from "~/store/product/productCart/productCartSlice";
import { styles } from "./styles";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const { id, title, price, image, category, rating } = product;
  const oldPrice = product.oldPrice ? product.oldPrice.toFixed(2) : getProductOldPrice(price);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigateToDetails = () => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addCartItem(product));
    dispatch(openCart());
  };

  return (
    <article 
      className={styles.card}
      onClick={handleNavigateToDetails}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} loading="lazy" />
        <Badge className={styles.categoryBadge} variant="secondary">
          {category}
        </Badge>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title} title={title}>{title}</h3>
        
        <div className={styles.ratingContainer}>
          <div className={styles.stars}>
            <Star className={styles.starIcon} size={16} fill="currentColor" />
            <span className={styles.rate}>{rating.rate}</span>
          </div>
          <span className={styles.count}>({rating.count} reviews)</span>
        </div>

        <div className={styles.footer}>
          <div className={styles.priceInfo}>
            <span className={styles.oldPrice}>${oldPrice}</span>
            <span className={styles.currentPrice}>${price.toFixed(2)}</span>
          </div>
          
          <Button 
            className="gap-2" 
            aria-label="Add to cart"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} />
            <span className={styles.buttonText}>Add</span>
          </Button>
        </div>
      </div>
    </article>
  );
};
