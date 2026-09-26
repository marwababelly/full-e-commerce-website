import { useState, useEffect } from "react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import styles from "./ProductDetailsPage.module.css";

// TODO: remove once Aya's productsApi.js is ready
const MOCK_PRODUCT = {
  id: 1,
  title: "HAVIT HV-G92 Gamepad",
  price: 120,
  oldPrice: 160,
  discountPercent: 25,
  rating: 4.5,
  reviewsCount: 88,
  images: ["/images/products/gamepad-1.png", "/images/products/gamepad-2.png"],
  category: "Gaming",
  colors: ["#A0BCE0", "#E07575"],
  sizes: ["XS", "S", "M", "L", "XL"],
  inStock: true,
  description: "High quality gamepad for PS5.",
};

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProduct(MOCK_PRODUCT);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className={styles.page}>
      <div className={styles.topSection}>
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      <ProductTabs description={product.description} />
      <RelatedProducts products={[]} />
    </div>
  );
}

export default ProductDetailsPage;