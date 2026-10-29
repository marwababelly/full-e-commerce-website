import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "./api/productsApi";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import styles from "./ProductDetailsPage.module.css";

function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const data = await getProductById(id);
        setProduct(data);

        setRelatedProducts([]);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  const productImages =
    product.images?.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : [];

  return (
    <main className={styles.page}>
      <div className={styles.topSection}>
        <ProductGallery images={productImages} />
        <ProductInfo product={product} />
      </div>

      <ProductTabs description={product.description} />

      <RelatedProducts products={relatedProducts} />
    </main>
  );
}

export default ProductDetailsPage;