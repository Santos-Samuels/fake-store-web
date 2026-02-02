import { Badge } from "~/components/ui/Badge/Badge";
import { styles } from "./styles";

interface ProductGalleryProps {
  image: string;
  title: string;
  category: string;
}

export const ProductGallery = ({ image, title, category }: ProductGalleryProps) => {
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt={title}
        className={styles.image}
      />
      <Badge
        className={styles.badge}
        variant="secondary"
      >
        {category}
      </Badge>
    </div>
  );
};
