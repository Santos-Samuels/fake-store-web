import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { openCart, selectCartItemsCount } from "~/store/product/productCart/productCartSlice";
import { styles } from "./styles";

export const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartItemsCount);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          FakeStore
        </Link>
        
        <nav className={styles.nav}>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
            }
          >
            Products
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
            }
          >
            About
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <button 
            className={styles.cartButton}
            onClick={() => dispatch(openCart())}
            aria-label="Open cart"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className={styles.badge}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
