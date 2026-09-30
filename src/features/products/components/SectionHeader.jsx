import styles from "./SectionHeader.module.css";

const SectionHeader = ({
  label,
  title,
  centerSlot,
  rightSlot,
  className = "",
}) => {
  return (
    <div className={`${styles.header} ${className}`}>
      <div className={styles.left}>
        <div className={styles.label}>
          <span className={styles.bar} />
          <span className={styles.labelText}>{label}</span>
        </div>

        <div className={styles.titleRow}>
          <h2 className={styles.title}>{title}</h2>
          {centerSlot && <div className={styles.center}>{centerSlot}</div>}
        </div>
      </div>

      {rightSlot && <div className={styles.right}>{rightSlot}</div>}
    </div>
  );
};

export default SectionHeader;