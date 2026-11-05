import styles from "./NewArrivalSection.module.css";
import SectionHeader from "./SectionHeader";

const NewArrivalSection = () => {
  return (
    <section className={styles.section}>
      <SectionHeader title="New Arrival" subtitle="Featured" />

      <div className={styles.grid}>
        {/* البانر الكبير (PlayStation) */}
        <div className={`${styles.card} ${styles.bigCard}`}>
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop"
            alt="PlayStation 5"
            className={styles.image}
          />
          <div className={styles.content}>
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <a href="#" className={styles.shopNow}>Shop Now</a>
          </div>
        </div>

        {/* البانر الطويل (Women's Collections) */}
        <div className={`${styles.card} ${styles.wideCard}`}>
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
            alt="Women's Collections"
            className={styles.image}
          />
          <div className={styles.content}>
            <h3>Women's Collections</h3>
            <p>Featured women collections that give you another vibe.</p>
            <a href="#" className={styles.shopNow}>Shop Now</a>
          </div>
        </div>

        {/* البانر الصغير (Speakers) */}
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop"
            alt="Speakers"
            className={styles.image}
          />
          <div className={styles.content}>
            <h3>Speakers</h3>
            <p>Amazon wireless speakers</p>
            <a href="#" className={styles.shopNow}>Shop Now</a>
          </div>
        </div>

        {/* البانر الصغير (Perfume) */}
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop"
            alt="Perfume"
            className={styles.image}
          />
          <div className={styles.content}>
            <h3>Perfume</h3>
            <p>GUCCI INTENSE OUD EDP</p>
            <a href="#" className={styles.shopNow}>Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;