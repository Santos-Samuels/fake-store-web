import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { styles } from "./styles";

export const Hero = () => {
  return (
    <div className={styles.section}>
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Hero background"
        className={styles.background}
      />
      <div className={styles.gradient} />
      
      <div className={styles.container}>
        <h1 className={styles.title}>
          Discover Style & Quality <br />
          <span className="text-indigo-500">For Every Occasion</span>
        </h1>
        <p className={styles.subtitle}>
          Explore our curated collection of premium clothing, jewelry, and electronics. 
          Quality products that fit your lifestyle and budget.
        </p>
        <div className={styles.actions}>
          <Link to="/products" className={styles.primaryButton}>
            Shop Collection
          </Link>
          <Link to="/about" className={styles.secondaryButton}>
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
