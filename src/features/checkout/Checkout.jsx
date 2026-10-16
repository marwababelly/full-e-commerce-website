import { useState } from "react";
import styles from "./Checkout.module.css";
import { useOrder } from "./useOrder";
import cartMockData from "../cart/components/cartMockData";

const COUPONS = {
  SAVE10: 10,
  WELCOME: 15,
  VIP20: 20,
};

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [saveInfo, setSaveInfo] = useState(true);

  const [form, setForm] = useState({
    firstName: "",
    company: "",
    street: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  const [coupon, setCoupon] = useState("");
  const [couponMsg, setCouponMsg] = useState("");
  const [discount, setDiscount] = useState(0);

  const { placeOrder, loading, error, order } = useOrder();

  const items = cartMockData;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const shipping = 0;
  const total = subtotal - discount + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (!code) {
      setCouponMsg("Please enter a coupon code");
      setDiscount(0);
      return;
    }

    const percent = COUPONS[code];

    if (percent) {
      const value = (subtotal * percent) / 100;
      setDiscount(value);
      setCouponMsg(`✅ ${percent}% discount applied!`);
    } else {
      setDiscount(0);
      setCouponMsg("❌ Invalid coupon code");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: `Order from ${form.firstName} ${form.company}`.trim(),
      body: `${form.street} ${form.apartment}, ${form.city} | ${form.phone} | ${form.email}`,
      userId: 1,
      payment: paymentMethod,
      coupon: coupon.trim().toUpperCase(),
      discount,
      items,
      subtotal,
      shipping,
      total,
    };

    await placeOrder(data);
  };

  if (order) {
    return (
      <div className={styles.checkoutContainer}>
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <h1 style={{ color: "#00b341", marginBottom: "16px" }}>
            ✅ Order Placed!
          </h1>
          <p style={{ fontSize: "18px" }}>
            Order ID: <strong>#{order.id}</strong>
          </p>
          <p style={{ color: "#666", marginTop: "8px" }}>
            Thank you, {form.firstName}!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.checkoutTitle}>Billing Details</h1>

      <div className={styles.checkoutLayout}>
        <form className={styles.billingSection} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>
              First Name<span>*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              Street Address<span>*</span>
            </label>
            <input
              type="text"
              name="street"
              value={form.street}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              name="apartment"
              value={form.apartment}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              Town/City<span>*</span>
            </label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              Phone Number<span>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              Email Address<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="saveInfo"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className={styles.checkboxInput}
            />
            <label htmlFor="saveInfo" className={styles.checkboxLabel}>
              Save this information for faster check-out next time
            </label>
          </div>
        </form>

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
              <span className={styles.itemPrice}>
                ${item.price * item.count}
              </span>
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
              <div className={styles.bankIcons}>
                <span style={{ fontSize: "12px", color: "#666" }}>
                  [Bkash/Visa/MasterCard]
                </span>
              </div>
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

          {error && (
            <p
              style={{
                color: "#db4444",
                marginTop: "12px",
                fontSize: "14px",
              }}
            >
              ❌ Error: {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;