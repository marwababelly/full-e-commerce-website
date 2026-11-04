import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/context/AuthContext.jsx";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import Checkout from "../features/checkout/Checkout";

import { CartProvider } from "../features/Cart/CartContext";
import LoginPage from "../features/auth/pages/LoginPage/LoginPage";
import RegisterPage from "../features/auth/pages/Register/Register.jsx";
import AccountPage from "../features/auth/pages/AccountPage/AccountPage";
import ProtectedRoute from "../features/auth/ProtectedRoute.jsx";

import ProductDetailsPage from "../features/Products/ProductDetailsPage.jsx";

export default function App() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();

  const hideHeader = ["/login", "/register", "/account"].includes(pathname);

  return (
    <CartProvider>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* مسارات المنتجات  */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />

        {/* مسارات عامة */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* مسارات الحساب  */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/account" replace /> : <LoginPage />
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? <Navigate to="/account" replace /> : <RegisterPage />
          }
        />
        
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