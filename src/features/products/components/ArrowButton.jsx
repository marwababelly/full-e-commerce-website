import styles from "./ArrowButton.module.css";

const ArrowButton = ({ direction, onClick, disabled = false }) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
};

export default ArrowButton;