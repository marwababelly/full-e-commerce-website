import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import CountdownTimer from "./CountdownTimer";
import ProductCard from "./ProductCard";
import ArrowButton from "./ArrowButton";
import styles from "./FlashSalesSection.module.css";

const FlashSalesSection = ({ products, flashSaleEnd }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Today's"
          title="Flash Sales"
          centerSlot={<CountdownTimer targetDate={flashSaleEnd} />}
          rightSlot={
            <div className={styles.arrows}>
              <ArrowButton direction="left" onClick={() => scroll("left")} />
              <ArrowButton direction="right" onClick={() => scroll("right")} />
            </div>
          }
        />

        <div className={styles.scroll} ref={scrollRef}>
          {products.map((product) => (
            <div key={product.id} className={styles.item}>
              <ProductCard product={product} />
            </div>
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

export default FlashSalesSection;