import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CartList from "../features/cart/components/cartList";
import CartActions from "../features/cart/components/CartActions";
import CouponForm from "../features/cart/components/CouponForm";
import CartSummary from "../features/cart/components/CartSummary";
import Checkout from "../features/checkout/Checkout";
import ContactPage from "../pages/ContactPage.jsx";
import cartMockData from "../features/cart/components/cartMockData";

// 1. استيراد نظام اللغات الذي أنشأناه
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function CartPage() {
  const navigate = useNavigate();
  const { t } = useLanguage(); // لاستخدام النصوص المترجمة إذا أردتِ

  // الحالة الأصلية للمنتجات المعتمدة على cartMockData
  const [cartItems, setCartItems] = useState(cartMockData);

  const handleCoupon = (code) => {
    const list = { SAVE10: 10, WELCOME: 15, VIP20: 20 };
    return Boolean(list[code.toUpperCase()]);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  // دوال تعديل الكمية والحذف المطلوبة ليعمل الجدول بشكل صحيح
  const handleUpdateQuantity = (id, newCount) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, count: newCount } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // دالة زر Update Cart لتعيد القيم إلى شكلها الافتراضي
  const handleUpdateCart = () => {
    setCartItems(cartMockData.map(item => ({ ...item })));
  };

  // حساب الـ subtotal ديناميكياً بناءً على البيانات
  const dynamicSubtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.count, 
    0
  );

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "80px 0" }}>
      <div style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* تمرير عناصر السلة الحقيقية للجدول */}
        <CartList 
          items={cartItems} 
          onUpdateQuantity={handleUpdateQuantity} 
          onRemoveItem={handleRemoveItem} 
        />

        {/* تمرير دالة التحديث للـ CartActions ليعمل زر Update Cart بشكل صحيح */}
        <div style={{ marginTop: "24px", marginBottom: "80px" }}>
          <CartActions onUpdateCart={handleUpdateCart} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "30px",
          }}
        >
          <CouponForm onApply={handleCoupon} />
          <CartSummary
            subtotal={dynamicSubtotal}
            shipping={0}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
}

// 2. مكون محتوى التطبيق الداخلي
function AppContent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

// 3. المكون الرئيسي المغلف بـ LanguageProvider (هذا هو التغليف المقصود)
export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}