import { useState } from "react";
import styles from "./Checkout.module.css";
import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";
import useAxiosPost from "../../hooks/UseAxiosPost";
import { useCart } from "../Cart/CartContext";

const COUPONS = { SAVE10: 10, WELCOME: 15, VIP20: 20 };

export default function Checkout() {
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

  const { items, subtotal, shipping } = useCart();
  const total = subtotal - discount + shipping;
  const { postData, data: order, loading, error } = useAxiosPost("posts");

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
      setDiscount((subtotal * percent) / 100);
      setCouponMsg(`✅ ${percent}% discount applied!`);
    } else {
      setDiscount(0);
      setCouponMsg("❌ Invalid coupon code");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      title: `Order from ${form.firstName} ${form.company}`.trim(),
      body: `${form.street} ${form.apartment}, ${form.city} | ${form.phone} | ${form.email}`,
      payment: paymentMethod,
      coupon: coupon.trim().toUpperCase(),
      discount,
      items,
      subtotal,
      shipping,
      total,
    };
    
    await postData(payload);
  };

  if (order && order.id) {
    return (
      <div className={styles.checkoutContainer}>
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <h1 style={{ color: "#00b341", marginBottom: "16px" }}>✅ Order Placed!</h1>
          <p style={{ fontSize: "18px" }}>Order ID: <strong>#{order.id}</strong></p>
          <p style={{ color: "#666", marginTop: "8px" }}>Thank you, {form.firstName}!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.checkoutTitle}>Billing Details</h1>
      <div className={styles.checkoutLayout}>
        <BillingForm
          form={form}
          handleChange={handleChange}
          saveInfo={saveInfo}
          setSaveInfo={setSaveInfo}
        />
        <OrderSummary
          items={items}
          subtotal={subtotal}
          discount={discount}
          shipping={shipping}
          total={total}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          coupon={coupon}
          setCoupon={setCoupon}
          couponMsg={couponMsg}
          handleApplyCoupon={handleApplyCoupon}
          handleSubmit={handleSubmit}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}