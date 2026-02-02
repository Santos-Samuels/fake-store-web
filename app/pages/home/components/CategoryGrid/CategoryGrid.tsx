import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { CategoriesWithIcon } from "~/shared/constants/productCategories";
import { styles } from "./styles";

export const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Shop by Category</h2>
          <p className={styles.subtitle}>
            Browse our wide selection of products arranged by category
          </p>
        </div>

        <div className={styles.grid}>
          {CategoriesWithIcon.map((category) => (
            <div 
              key={category.name} 
              className={styles.card}
              onClick={() => handleCategoryClick(category.name)}
            >
              <img
                src={category.icon}
                alt={category.name}
                className={styles.cardImage}
              />
              <div className={styles.overlay} />
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{category.name}</h3>
                <span className={styles.cardLink}>
                  View Products <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
