import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import Checkout from "../features/checkout/Checkout";
import ProductDetailsPage from "../features/products/ProductDetailsPage";
import Products from "../features/Products";
import WishlistPage from "../pages/WishlistPage";
import LoginPage from "../features/auth/pages/LoginPage/LoginPage";

// استيراد الـ Providers
import { LanguageProvider } from "../context/LanguageContext";
import { CartProvider } from "../features/cart/CartContext";
import { WishlistProvider } from "../features/WishlistContext";

function AppContent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <WishlistProvider>
          <AppContent />
        </WishlistProvider>
      </CartProvider>
    </LanguageProvider>
  );
}