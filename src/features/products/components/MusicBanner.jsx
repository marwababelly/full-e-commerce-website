import styles from "./MusicBanner.module.css";

const timerUnits = [
  { id: 1, label: "Hours", value: 23 },
  { id: 2, label: "Days", value: 5 },
  { id: 3, label: "Minutes", value: 59 },
  { id: 4, label: "Seconds", value: 35 },
];

const MusicBanner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <span className={styles.label}>Categories</span>

            <h2 className={styles.title}>
              Enhance Your
              <br />
              Music Experience
            </h2>

            <div className={styles.timer}>
              {timerUnits.map((unit) => (
                <div key={unit.id} className={styles.timerCircle}>
                  <span className={styles.timerValue}>
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className={styles.timerLabel}>{unit.label}</span>
                </div>
              ))}
            </div>

            <button type="button" className={styles.buyNow}>
              Buy Now!
            </button>
          </div>

          <div className={styles.imageWrapper}>
            <img
              src="https://picsum.photos/seed/speakerbanner/600/500"
              alt="Speaker"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicBanner;