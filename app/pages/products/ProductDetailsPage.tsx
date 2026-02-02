import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Button } from "~/components/ui/Button/Button";
import { AppDispatch, RootState } from "~/store";
import { addCartItem, openCart } from "~/store/product/productCart/productCartSlice";
import { clearProductDetails, fetchProductDetails } from "~/store/product/productDetails/productDetailsSlice";
import { ProductActions } from "./components/ProductActions/ProductActions";
import { ProductGallery } from "./components/ProductGallery/ProductGallery";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";
import { styles } from "./productDetails.styles";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { product, isLoading } = useSelector((state: RootState) => state.productDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(Number(id)));
    }
    
    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addCartItem(product));
      dispatch(openCart());
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingTitle}></div>
        <div className={styles.loadingGrid}>
          <div className={styles.loadingImage}></div>
          <div className={styles.loadingContent}>
            <div className={styles.loadingTextLarge}></div>
            <div className={styles.loadingTextSmall}></div>
            <div className={styles.loadingBlock}></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.notFoundContainer}>
        <h2 className={styles.notFoundTitle}>Product not found</h2>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Button 
        variant="ghost" 
        className={styles.backButton}
        onClick={() => navigate("/products")}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Button>

      <div className={styles.contentGrid}>
        <ProductGallery 
          image={product.image} 
          title={product.title} 
          category={product.category} 
        />

        <div className="flex flex-col">
          <ProductInfo 
            title={product.title} 
            price={product.price} 
            description={product.description} 
            rating={product.rating} 
          />

          <ProductActions onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
