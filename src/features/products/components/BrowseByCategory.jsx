import SectionHeader from "./SectionHeader";
import ArrowButton from "./ArrowButton";
import styles from "./BrowseByCategory.module.css";

const categories = [
  { id: 1, name: "Phones", icon: "📱" },
  { id: 2, name: "Computers", icon: "💻" },
  { id: 3, name: "SmartWatch", icon: "⌚" },
  { id: 4, name: "Camera", icon: "📷" },
  { id: 5, name: "HeadPhones", icon: "🎧" },
  { id: 6, name: "Gaming", icon: "🎮" },
];

const BrowseByCategory = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          label="Categories"
          title="Browse By Category"
          rightSlot={
            <div className={styles.arrows}>
              <ArrowButton direction="left" onClick={() => {}} />
              <ArrowButton direction="right" onClick={() => {}} />
            </div>
          }
        />

        <div className={styles.grid}>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={styles.categoryCard}
            >
              <span className={styles.icon}>{category.icon}</span>
              <span className={styles.name}>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;