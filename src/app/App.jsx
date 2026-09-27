import { Routes, Route } from "react-router-dom";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import HomePage from "../pages/HomePage";
import CartList from "../features/cart/components/cartList";
import CartActions from "../features/cart/components/CartActions";
import CouponForm from "../features/cart/components/CouponForm";
import CartSummary from "../features/cart/components/CartSummary";
import Checkout from "../features/Checkout";

function CartPage() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "80px 0" }}>
      <div style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 20px" }}>
        <CartList />
        <div style={{ marginTop: "24px", marginBottom: "80px" }}>
          <CartActions />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "30px",
          }}
        >
          <CouponForm />
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;