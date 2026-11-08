/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartList from "../features/cart/components/cartList";
import CartActions from "../features/cart/components/CartActions";
import CouponForm from "../features/cart/components/CouponForm";
import CartSummary from "../features/cart/components/CartSummary";
import { useLanguage } from "../context/LanguageContext"; // حفظنا شغل زميلك

export default function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const { language } = useLanguage(); // حفظنا ميزة اللغة

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = items.filter((item) => item.id !== id);
    setItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); 
  };

  const updateQuantity = (id, amount) => {
    const updatedCart = items.map((item) =>
      item.id === id ? { ...item, count: Math.max(1, item.count + amount) } : item
    );
    setItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); 
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.count, 0);
  const shipping = 0;

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "80px 0", direction: language === "ar" ? "rtl" : "ltr" }}>
      <div style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 20px" }}>
        
        <CartList 
          items={items} 
          onUpdateQuantity={updateQuantity} 
          onRemoveItem={removeFromCart} 
        />

        <div style={{ marginTop: "24px", marginBottom: "80px" }}>
          <CartActions 
            onBack={() => navigate("/")} 
            onUpdate={() => window.dispatchEvent(new Event("cartUpdated"))} 
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "30px", flexWrap: "wrap" }}>
          <CouponForm onApply={(code) => console.log(code)} />
          <CartSummary subtotal={subtotal} shipping={shipping} onCheckout={() => navigate("/checkout")} />
        </div>

      </div>
    </div>
  );
}