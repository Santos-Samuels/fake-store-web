import { X, ShoppingBag } from "lucide-react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCart,
  selectCartItemsCount,
  selectCartTotal,
} from "~/store/product/productCart/productCartSlice";
import { RootState } from "~/store";
import { CartItem } from "../CartItem/CartItem";
import { styles } from "./styles";

export const CartDrawer = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  const total = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemsCount);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        dispatch(closeCart());
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, dispatch]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className={styles.overlay} 
        onClick={() => dispatch(closeCart())}
        aria-hidden="true"
      />
      
      <div 
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : styles.drawerClosed}`}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 id="cart-title" className={styles.title}>
              Shopping Cart ({itemCount})
            </h2>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => dispatch(closeCart())}
            >
              <span className="sr-only">Close panel</span>
              <X size={20} />
            </button>
          </div>

          <div className={styles.body}>
            {items.length === 0 ? (
              <div className={styles.emptyState}>
                <ShoppingBag size={48} className={styles.emptyIcon} />
                <p className={styles.emptyText}>Your cart is empty</p>
              </div>
            ) : (
              <div className="flex flex-col">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Total</span>
                <span className={styles.totalValue}>${total.toFixed(2)}</span>
              </div>
              <button className={styles.checkoutButton}>
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
