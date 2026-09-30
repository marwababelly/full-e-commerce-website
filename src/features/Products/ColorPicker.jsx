import styles from "./ColorPicker.module.css";

// colors: array of hex strings, e.g. ["#A0BCE0", "#E07575"]
function ColorPicker({ colors, selectedColor, onSelect }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Colours:</span>
      <div className={styles.colors}>
        {colors.map((color) => (
          <button
            key={color}
            className={`${styles.dot} ${color === selectedColor ? styles.active : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => onSelect(color)}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;