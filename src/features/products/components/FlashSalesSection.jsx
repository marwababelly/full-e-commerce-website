import { Link } from "react-router-dom";
import styles from "./FlashSalesSection.module.css";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";

const FlashSalesSection = ({ products, flashSaleEnd }) => {
  return (
    <section className={styles.section}>
      <SectionHeader title="Flash Sales" endTime={flashSaleEnd} />
      
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* الزر اللي بينقلنا لصفحة المنتجات */}
      <div className={styles.viewAllWrapper}>
        <Link to="/products" className={styles.viewAllBtn}>
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default FlashSalesSection;