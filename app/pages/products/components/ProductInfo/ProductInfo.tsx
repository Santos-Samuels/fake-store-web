import { Star } from "lucide-react";
import { Badge } from "~/components/ui/Badge/Badge";
import { getProductOldPrice } from "~/shared/helpers";
import { styles } from "./styles";

interface ProductInfoProps {
  title: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductInfo = ({ title, price, description, rating }: ProductInfoProps) => {
  const oldPrice = getProductOldPrice(price);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {title}
      </h1>

      <div className={styles.ratingContainer}>
        <div className={styles.ratingStars}>
          <Star className={styles.starIcon} />
          <span className={styles.ratingValue}>{rating.rate}</span>
        </div>
        <span className={styles.separator}>|</span>
        <span className={styles.reviewCount}>{rating.count} reviews</span>
      </div>

      <div className={styles.priceContainer}>
        <span className={styles.price}>${price}</span>
        <span className={styles.oldPrice}>${oldPrice}</span>
        <Badge variant="destructive" className={styles.discountBadge}>
          Save 20%
        </Badge>
      </div>

      <p className={styles.description}>{description}</p>
    </div>
  );
};
