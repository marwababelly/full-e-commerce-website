
import { useState } from "react";
import styles from "./Cart.module.css";
import CartActions from "./components/CartActions";
import CouponForm from "./components/CouponForm";
import CartSummary from "./components/CartSummary";
const Cart =()=>{ 
  const [items] =useState ([
  { id: 1, name: "LCD Monitor", price: 650, quantity: 1 },
  { id: 2, name: "HI Gamepad", price: 550, quantity: 2 }
  ]);
const [toast, setToast] = useState({
    show: false,
    text: "",
    type: "success",
  });
const show = (text, type = "success") => {
    setToast({ show: true, text, type });
    setTimeout(() => {
      setToast((p) => ({ ...p, show: false }));
    }, 2500);
  };
 const subtotal = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const shipping = 0;

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    show("Navigating back to shop...");
  };

  const handleUpdate = () => {
    show("Cart updated successfully!");
  };
const handleCoupon = (code) => {
    const list = { SAVE10: 10, WELCOME: 15, VIP20: 20 };
    return Boolean(list[code.toUpperCase()]);
  };

  const handleCheckout = () => {
    show("Redirecting to checkout...");
  };

  const toastCls = [
    styles.toast,
    toast.type === "error" ? styles.err : "",
    toast.show ? styles.show : styles.hide,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.page}>
    <div className={toastCls}>{toast.text}</div>
    <CartActions onBack={handleBack} onUpdate={handleUpdate} />

      <div className={styles.grid}>
        <CouponForm onApply={handleCoupon} />
        <CartSummary
          subtotal={subtotal}
          shipping={shipping}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
};
export default Cart;