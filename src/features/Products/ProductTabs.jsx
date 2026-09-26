import { useState } from "react";
import styles from "./ProductTabs.module.css";

function ProductTabs({ description }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabHeaders}>
        <button
          className={activeTab === "description" ? `${styles.tab} ${styles.active}` : styles.tab}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={activeTab === "reviews" ? `${styles.tab} ${styles.active}` : styles.tab}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className={styles.content}>
        {activeTab === "description" ? <p>{description}</p> : <p>Reviews coming soon...</p>}
      </div>
    </div>
  );
}

export default ProductTabs;