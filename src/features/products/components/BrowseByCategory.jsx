import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2 } from "lucide-react";
import styles from "./BrowseByCategory.module.css";
import SectionHeader from "./SectionHeader";

const categories = [
  { id: 1, name: "Phones", icon: Smartphone },
  { id: 2, name: "Computers", icon: Monitor },
  { id: 3, name: "SmartWatch", icon: Watch },
  { id: 4, name: "Camera", icon: Camera },
  { id: 5, name: "HeadPhones", icon: Headphones },
  { id: 6, name: "Gaming", icon: Gamepad2 },
];

const BrowseByCategory = () => {
  return (
    <section className={styles.section}>
      <SectionHeader title="Browse By Category" subtitle="Categories" />

      <div className={styles.categoriesGrid}>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className={`${styles.categoryCard} ${category.active ? styles.active : ""}`}
            >
              <Icon size={32} strokeWidth={1.5} />
              <span className={styles.categoryName}>{category.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrowseByCategory;