import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import Checkout from "../features/checkout/Checkout";

// استيراد الـ Providers الأساسية الموجودة فعلياً فقط
import { LanguageProvider } from "../context/LanguageContext";
import { CartProvider } from "../features/cart/CartContext";

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

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
}