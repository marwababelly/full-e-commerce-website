import ProductCard from "../features/products/components/ProductCard";
import { useProducts } from "../features/products/hooks/useProducts";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p style={{ padding: 40 }}>Loading products...</p>;
  if (error) return <p style={{ padding: 40 }}>Error: {error.message}</p>;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Products Test</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;