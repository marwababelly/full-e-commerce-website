import styles from "./SizePicker.module.css";

// sizes: array of strings, e.g. ["XS", "S", "M", "L", "XL"]
function SizePicker({ sizes, selectedSize, onSelect }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Size:</span>
      <div className={styles.sizes}>
        {sizes.map((size) => (
          <button
            key={size}
            className={`${styles.btn} ${size === selectedSize ? styles.active : ""}`}
            onClick={() => onSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizePicker;