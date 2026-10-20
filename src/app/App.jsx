import { Routes, Route, useLocation } from "react-router-dom";
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
import LoginPage from "../features/auth/pages/LoginPage/LoginPage";
import RegisterPage from "../features/auth/pages/Register/Register.jsx";
import AccountPage from "../features/auth/pages/AccountPage/AccountPage";
import ProtectedRoute from "../features/auth/ProtectedRoute.jsx";

function CartPage() {
  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUpdate = () => {
    console.log("Cart updated");
  };

  const handleCoupon = (code) => {
    const list = { SAVE10: 10, WELCOME: 15, VIP20: 20 };
    return Boolean(list[code.toUpperCase()]);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout");
  };

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "80px 0" }}>
      <div style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 20px" }}>
        <CartList />

        <div style={{ marginTop: "24px", marginBottom: "80px" }}>
          <CartActions onBack={handleBack} onUpdate={handleUpdate} />
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
            subtotal={1750}
            shipping={0}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
}


function App() {
  const { pathname } = useLocation();
 const hideHeader = ["/login", "/register", "/account"].includes(pathname);
  
  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
  path="/account"
  element={
    <ProtectedRoute>
      <AccountPage />
    </ProtectedRoute>
  }
/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;