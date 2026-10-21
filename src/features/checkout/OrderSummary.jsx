import styles from "./Checkout.module.css";
export default function OrderSummary({
  items,
  subtotal,
  discount,
  shipping,
  total,
  paymentMethod,
  setPaymentMethod,
  coupon,
  setCoupon,
  couponMsg,
  handleApplyCoupon,
  handleSubmit,
  loading,
  error,
}) {
  if (error) {
    return (
      <div
        className={styles.orderSection}
        style={{ color: "#db4444", textAlign: "center", padding: "20px" }}
      >
        <h3>❌ Error: {error}</h3>
        <p>Please try again.</p>
      </div>
    );
  }
  return (
    <div className={styles.orderSection}>
      {items.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <div className={styles.itemInfo}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.itemImage}
            />
            <span className={styles.itemName}>
              {item.title} × {item.count}
            </span>
          </div>
          <span className={styles.itemPrice}>${item.price * item.count}</span>
        </div>
      ))}
      <div className={styles.summaryRow}>
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>

      {discount > 0 && (
        <div className={styles.summaryRow} style={{ color: "#00b341" }}>
          <span>Discount:</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
      )}
      <div className={styles.summaryRow}>
        <span>Shipping:</span>
        <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
      </div>
      <div className={`${styles.summaryRow} ${styles.totalRow}`}>
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className={styles.paymentOptions}>
        <div className={styles.paymentOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className={styles.radioInput}
            />
            Bank
          </label>
        </div>
        <div className={styles.paymentOption}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className={styles.radioInput}
            />
            Cash on delivery
          </label>
        </div>
      </div>
      <div className={styles.couponGroup}>
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className={styles.couponInput}
        />
        <button
          className={styles.couponBtn}
          type="button"
          onClick={handleApplyCoupon}
        >
          Apply Coupon
        </button>
      </div>

      {couponMsg && (
        <p
          style={{
            fontSize: "13px",
            marginTop: "8px",
            color: couponMsg.startsWith("✅") ? "#00b341" : "#db4444",
          }}
        >
          {couponMsg}
        </p>
      )}

      <button
        className={styles.placeOrderBtn}
        type="button"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}