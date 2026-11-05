import { useEffect, useState } from "react";

import ProductCard from "./products/components/ProductCard";
import { getProducts } from "./Products/api/productsApi";
import styles from "./Products.module.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (loading) {
    return <div style={{ padding: "100px", textAlign: "center", fontSize: "18px" }}>Loading Products...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>All Products</h1>
        <span>Showing {products.length} products</span>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}