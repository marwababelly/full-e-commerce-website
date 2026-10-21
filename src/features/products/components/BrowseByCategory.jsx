import { useRef } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import ArrowButton from "./ArrowButton";
import styles from "./BrowseByCategory.module.css";


const iconMapping = {
  "Camera": "📷",
  "Cell Phone": "📱",
  "Computer": "💻",
  "Gamepad": "🎮",
  "Headphone": "🎧",
  "Smart Watch": "⌚"
};

const BrowseByCategory = ({ categories }) => {
  const scrollRef = useRef(null);

  if (!categories || categories.length === 0) return null;

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 200;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Categories"
          title="Browse By Category"
          rightSlot={
            <div className={styles.arrows}>
              <ArrowButton direction="left" onClick={() => scroll("left")} />
              <ArrowButton direction="right" onClick={() => scroll("right")} />
            </div>
          }
        />

        <div className={styles.grid} ref={scrollRef}>
          {categories.map((category) => (
            <Link
              to={`/products?filter=${category.slug}`}
              key={category.id}
              className={styles.categoryCard}
            >
            
              <span className={styles.icon}>
                {iconMapping[category.name] || (
                  <img src={category.icon} alt={category.name} className={styles.categoryIcon} />
                )}
              </span>
              <span className={styles.name}>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;