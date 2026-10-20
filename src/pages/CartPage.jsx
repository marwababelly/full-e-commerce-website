import { useNavigate } from "react-router-dom";
import CartList from "../features/cart/components/cartList";
import CartActions from "../features/cart/components/CartActions";
import CouponForm from "../features/cart/components/CouponForm";
import CartSummary from "../features/cart/components/CartSummary";
import { useCart } from "../features/Cart/CartContext";

export default function CartPage() {
  const navigate = useNavigate();
  const { subtotal, shipping } = useCart();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const updateCart = () => console.log("Cart updated");
  
  const applyCoupon = (code) => {
    const validCoupons = { SAVE10: 10, WELCOME: 15, VIP20: 20 };
    return Boolean(validCoupons[code.toUpperCase()]);
  };
  
  const proceedToCheckout = () => navigate("/checkout");

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "80px 0" }}>
      <div style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 20px" }}>
        <CartList />
        <div style={{ marginTop: "24px", marginBottom: "80px" }}>
          <CartActions onBack={scrollToTop} onUpdate={updateCart} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "30px" }}>
          <CouponForm onApply={applyCoupon} />
          <CartSummary subtotal={subtotal} shipping={shipping} onCheckout={proceedToCheckout} />
        </div>
      </div>
    </div>
  );
}