import { Routes, Route } from "react-router-dom";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage"; // استوردنا الصفحة الجديدة
import Checkout from "../features/checkout/Checkout";
import { CartProvider } from "../features/Cart/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}