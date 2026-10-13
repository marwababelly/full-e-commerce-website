import { useRef } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import ArrowButton from "./ArrowButton";
import styles from "./BrowseByCategory.module.css";

const categories = [
  { id: 1, name: "Phones", icon: "📱", filter: "electronics" },
  { id: 2, name: "Computers", icon: "💻", filter: "electronics" },
  { id: 3, name: "SmartWatch", icon: "⌚", filter: "electronics" },
  { id: 4, name: "Camera", icon: "📷", filter: "electronics" },
  { id: 5, name: "HeadPhones", icon: "🎧", filter: "music" },
  { id: 6, name: "Gaming", icon: "🎮", filter: "gaming" },
];

const BrowseByCategory = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 250;
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
              to={`/products?filter=${category.filter}`}
              key={category.id}
              className={styles.categoryCard}
            >
              <span className={styles.icon}>{category.icon}</span>
              <span className={styles.name}>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;