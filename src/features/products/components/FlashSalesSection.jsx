/* eslint-disable react-hooks/purity */
import { Link } from "react-router-dom";
import styles from "./FlashSalesSection.module.css";
import ProductCard from "./ProductCard";
import CountdownTimer from "./CountdownTimer";

const FlashSalesSection = ({ products, flashSaleEnd }) => {
  const endDate = flashSaleEnd || new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();

  return (
    <section className={styles.section}>
      
      <div className={styles.headerWrapper}>
        <div className={styles.headerTitle}>
          <span className={styles.headerSubtitle}>Today's</span>
          
          <div className={styles.titleRow}>
            <h2>Flash Sales</h2>
            <CountdownTimer targetDate={endDate} />
          </div>

        </div>
      </div>
      
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.viewAllWrapper}>
        <Link to="/products" className={styles.viewAllBtn}>
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default FlashSalesSection;