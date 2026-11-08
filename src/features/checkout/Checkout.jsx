/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import styles from "./Checkout.module.css";
import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";

const COUPONS = { SAVE10: 10, WELCOME: 15, VIP20: 20 };

export default function Checkout() {
  const [items, setItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("stripe"); 
  const [saveInfo, setSaveInfo] = useState(true);
  
  const [form, setForm] = useState({
    firstName: "", company: "", street: "", apartment: "", city: "", phone: "", email: "",
  });
  
  const [coupon, setCoupon] = useState("");
  const [couponMsg, setCouponMsg] = useState("");
  const [discount, setDiscount] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // جلب المنتجات من الـ LocalStorage لعرضها في الملخص
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(savedCart);
  }, []);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.count, 0);
  const shipping = 0;
  const total = subtotal - discount + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // دالة تطبيق الكوبون
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

  // دالة إتمام الطلب (الربط الحقيقي)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("shipping_address", form.city || "Damascus"); 
    formData.append("payment_method", "stripe"); 

    try {
      const token = localStorage.getItem("token");
      
      // استخدام fetch لضمان إرسال الطلب بنفس شكل الـ Postman
      const response = await fetch("https://ecommerce.monzeryshop.shop/api/check-out", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          ...(token && { "Authorization": `Bearer ${token}` }) 
        },
        body: formData, 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      
      // حفظ بيانات الطلب لعرض شاشة النجاح
      setOrder(data.data.order);
      
      // تفريغ السلة بعد النجاح
      localStorage.removeItem("cart");
      window.dispatchEvent(new Event("cartUpdated"));
      
    } catch (err) {
      console.error("خطأ في الـ Checkout:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // شاشة النجاح
  if (order) {
    return (
      <div className={styles.checkoutContainer}>
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <h1 style={{ color: "#00b341", marginBottom: "16px" }}>✅ Order Placed!</h1>
          <p style={{ fontSize: "18px" }}>Order Number: <strong>{order.order_number}</strong></p>
          <p style={{ fontSize: "16px", marginTop: "8px" }}>Total: ${order.total}</p>
          <p style={{ color: "#666", marginTop: "8px" }}>Thank you for your purchase!</p>
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