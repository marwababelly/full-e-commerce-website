import { useState } from "react";
import styles from "./ProductTabs.module.css";

function ProductTabs({ description }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className={styles.wrapper}>
      <div className={styles.tabHeaders}>
        <button
          type="button"
          className={
            activeTab === "description"
              ? `${styles.tab} ${styles.active}`
              : styles.tab
          }
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          type="button"
          className={
            activeTab === "reviews"
              ? `${styles.tab} ${styles.active}`
              : styles.tab
          }
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === "description" ? (
          <p>{description}</p>
        ) : (
          <div>
            <h3>Customer Reviews</h3>
            <p>No customer reviews yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductTabs;