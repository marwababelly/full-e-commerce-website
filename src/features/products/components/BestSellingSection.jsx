import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
import styles from "./BestSellingSection.module.css";

const BestSellingSection = ({ products }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="This Month"
          title="Best Selling Products"
          rightSlot={
            <button type="button" className={styles.viewAllButton}>
              View All
            </button>
          }
        />

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingSection;