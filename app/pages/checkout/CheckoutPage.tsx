import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { clearCart } from "~/store/product/productCart/productCartSlice";
import type { Route } from "./+types/CheckoutPage";
import { styles } from "./styles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Order Confirmed | Fake Store Web" },
    { name: "description", content: "Your order has been placed successfully." },
  ];
}

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear cart when landing on success page
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <CheckCircle2 className={styles.icon} />
        </div>
        
        <h1 className={styles.title}>Order Confirmed!</h1>
        <p className={styles.message}>
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        <button 
          className={styles.button}
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
        
        <button 
          className={styles.secondaryButton}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
