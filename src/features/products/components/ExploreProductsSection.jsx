import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
import ArrowButton from "./ArrowButton";
import styles from "./ExploreProductsSection.module.css";

const PRODUCTS_PER_PAGE = 8;

const ExploreProductsSection = ({ products }) => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const visibleProducts = products.slice(
    page * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE
  );

  const goPrev = () => {
    if (page > 0) setPage((p) => p - 1);
  };

  const goNext = () => {
    if (page < totalPages - 1) setPage((p) => p + 1);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Our Products"
          title="Explore Our Products"
          rightSlot={
            <div className={styles.arrows}>
              <ArrowButton
                direction="left"
                onClick={goPrev}
                disabled={page === 0}
              />
              <ArrowButton
                direction="right"
                onClick={goNext}
                disabled={page >= totalPages - 1}
              />
            </div>
          }
        />

        <div className={styles.grid}>
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <button type="button" className={styles.viewAllButton}>
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreProductsSection;