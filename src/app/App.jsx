
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import Checkout from "../features/checkout/Checkout";
import { CartProvider } from "../features/Cart/CartContext";

import LoginPage from "../features/auth/pages/LoginPage/LoginPage";
import RegisterPage from "../features/auth/pages/Register/Register.jsx";
import AccountPage from "../features/auth/pages/AccountPage/AccountPage";
import ProtectedRoute from "../features/auth/ProtectedRoute.jsx";

export default function App() {
  const { pathname } = useLocation();
  const hideHeader = ["/login", "/register", "/account"].includes(pathname);

  return (
    <CartProvider>
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
    </CartProvider>
  );
}
