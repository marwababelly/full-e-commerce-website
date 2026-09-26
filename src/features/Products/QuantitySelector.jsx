import styles from "./QuantitySelector.module.css";

function QuantitySelector({ quantity, onChange, max = 99 }) {
  const decrease = () => quantity > 1 && onChange(quantity - 1);
  const increase = () => quantity < max && onChange(quantity + 1);

  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={decrease}>-</button>
      <span className={styles.value}>{quantity}</span>
      <button className={styles.btn} onClick={increase}>+</button>
    </div>
  );
}

export default QuantitySelector;