import { Trash2, Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  decreaseCartItem,
  removeCartItem,
} from "~/store/product/productCart/productCartSlice";
import { CartItem as CartItemType } from "~/store/product/productCart/types";
import { styles } from "./styles";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addCartItem(item));
  };

  const handleDecrease = () => {
    dispatch(decreaseCartItem({ id: item.id }));
  };

  const handleRemove = () => {
    dispatch(removeCartItem({ id: item.id }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={item.image} alt={item.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
        
        <div className={styles.controls}>
          <div className={styles.quantityControl}>
            <button
              className={styles.quantityButton}
              onClick={handleDecrease}
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className={styles.quantity}>{item.quantity}</span>
            <button
              className={styles.quantityButton}
              onClick={handleIncrease}
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
          
          <button 
            className={styles.removeButton}
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
